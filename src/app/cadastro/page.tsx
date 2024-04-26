'use client'
import React, { useState } from 'react';
import RedesSociais from "../components/RedesSociais";
import Link from "next/link";

function Cadastro() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [contaCadastrada, setContaCadastrada] = useState(null); // Adicione o estado para a conta cadastrada

    function registrarCliente(event: { preventDefault: () => void; }) {
        event.preventDefault();

        // Verifica se já existe uma conta com as mesmas credenciais
        const contasCadastradas = JSON.parse(localStorage.getItem('contasCadastradas') || '[]');
        const contaExistente = contasCadastradas.find((conta: any) => conta.email === email && conta.senha === senha);

        if (contaExistente) {
            alert('Já existe uma conta com essas credenciais.');
            return;
        }

        // Salva as credenciais no localStorage
        const novaConta = {
            nome: nome,
            senha: senha,
            email: email,
            dataNascimento: dataNascimento
        };
        localStorage.setItem('contasCadastradas', JSON.stringify([...contasCadastradas, novaConta]));

        // Limpa as credenciais depois que a criação da conta é bem sucedida
        setNome('');
        setSenha('');
        setEmail('');
        setDataNascimento('');

        alert('Usuário registrado com sucesso.');
    }

    return (
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form id="sign-up-form" onSubmit={registrarCliente}>
                    <h1>Criar Cadastro</h1>
                    <RedesSociais />
                    <span>ou use e-mail para cadastro</span>
                    <input type="text" id="signup-name" placeholder="Name" value={nome} onChange={(ev) => setNome(ev.target.value)}></input>
                    <input type="date" id="signup-date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(ev) => setDataNascimento(ev.target.value)} ></input>
                    <input type="email" id="signup-email" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)}></input>
                    <input type="password" id="signup-password" placeholder="Senha" value={senha} onChange={(ev) => setSenha(ev.target.value)}></input>
                    <button type="submit" className="acao">Inscrever</button>
                    {mensagem && <p>{mensagem}</p>}
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-right">
                        <h1>Já possui cadastro?</h1>
                        <p>Faça login com seus dados e acesse nossa plataforma</p>
                        <button className="hidden" id="register"><Link href="/">Fazer Login</Link></button>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Cadastro;


