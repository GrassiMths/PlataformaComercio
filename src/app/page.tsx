'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import RedesSociais from './components/RedesSociais';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [contasCadastradas, setContasCadastradas] = useState([]);

    useEffect(() => {
        // pega as informações das contas cadastradas
        const contasSalvas = JSON.parse(localStorage.getItem('contasCadastradas') || '[]');
        setContasCadastradas(contasSalvas);
    }, []);

    // Função para realizar o login
    function handleLogin(event: { preventDefault: () => void; }) {
        event.preventDefault();

        // Verificar se a conta existe
        if (contasCadastradas.length === 0) {
            alert('Não há contas cadastradas. Por favor, registre-se.');
            return;
        }

        // Verificar se o email e a senha estão certos
        const contaEncontrada = contasCadastradas.find((conta) => conta.email === email && conta.senha === senha);

        if (contaEncontrada) {
            alert('Login bem-sucedido!');
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




