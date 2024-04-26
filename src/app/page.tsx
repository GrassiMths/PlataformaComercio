'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import RedesSociais from './components/RedesSociais';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [contaCadastrada, setContaCadastrada] = useState(null);

    // Carregar a conta cadastrada ao iniciar a tela de login
    useEffect(() => {
        // Obter as informações da conta cadastrada do localStorage
        const contaSalva = JSON.parse(localStorage.getItem('contaCadastrada'));
        setContaCadastrada(contaSalva);
    }, []);

    // Função para realizar o login
    function handleLogin(event: { preventDefault: () => void; }) {
        event.preventDefault();

        // Verificar se há uma conta cadastrada
        if (!contaCadastrada) {
            alert('Não há contas cadastradas. Por favor, registre-se.');
            return;
        }

        // Verificar se o email e a senha correspondem ao usuário cadastrado
        if (email === contaCadastrada.email && senha === contaCadastrada.senha) {
            alert('Login bem-sucedido!');
            // Redirecionar para a página de catálogo
            window.location.href = '/catalogo';
        } else {
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    }

    return (
        <div className="container">
            <div className="form-container sign-in">
                <form id="login-form" onSubmit={handleLogin}>
                    <h1>Entrar</h1>
                    <RedesSociais />
                    <span>ou use sua senha de email</span>
                    <input
                        type="email"
                        id="login-email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        id="login-password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    ></input>
                    <a href="#">Esqueceu sua senha?</a>
                    <button type="submit" className="acao" id="entrarBtn">Entrar</button>
                    {mensagem && <p>{mensagem}</p>}
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-right">
                        <h1>Novo por aqui?</h1>
                        <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                        <button className="hidden"><Link href={"/cadastro"}>Inscrever</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;



