'use client'
import RedesSociais from "../components/RedesSociais";
import Link from "next/link";
import { useState } from "react";


function registrarCliente(){
    alert('Usuário registrado.')
}

function Cadastro (){

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState ('')
    const [email, setEmail] = useState ('')
    const [dataNascimento, setDataNascimento] = useState ('')   

    const usuarios = [];

    function registrarCliente(event: any){
        event.defaultPrevented;

        const novoUsuario = {
            nome: nome,
            senha: senha,
            email: email,
            dataNascimento: dataNascimento,
        };

        usuarios.push(novoUsuario);

        setNome ('');
        setSenha ('')
        setEmail('')
        setDataNascimento('')

        alert('Usuário registrado.')
        console.log('')
    }




    
    return (
        <body>
                <div className="container" id="container">
                    <div className ="form-container sign-up">
                        <form id="sign-up form" onSubmit={registrarCliente}>
                            <h1>Criar Cadastro</h1>
                            <RedesSociais/>
                            <span>ou use e-mail para cadastro</span>
                            <input type="text" id="signup-name" placeholder="Name" value={nome} onChange={(ev) => setNome(ev.target.value)}></input>
                            <input type="date" id ="signup-date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(ev) => setDataNascimento(ev.target.value)} ></input>
                            <input type="email" id="signup-email" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)}></input>
                            <input type="password" id="signup-password" placeholder="Senha" value={senha} onChange={(ev) => setSenha(ev.target.value)}></input>
                            <button type="submit" className="acao" onClick={registrarCliente}>Inscrever</button>
                        </form>
                    </div>

                    <div className ="toggle-container">
                        <div className ="toggle">
                            <div className ="toggle-panel toggle-right">
                            <h1>Já possui cadastro?</h1>
                            <p>Faça login com seus dados e acesse nossa plataforma</p>
                            <button className ="hidden" id="register"><Link href="/">Fazer Login</Link></button>
                            </div>
                        </div>
                     </div>
                </div>        
        </body>

    )
}

export default Cadastro;
