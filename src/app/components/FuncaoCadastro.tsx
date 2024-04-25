import { useState } from "react";
import RedesSociais from "./RedesSociais";

export default function fCadastro (){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');

    return (

        <form id="sign-up form">
            <h1>Criar Cadastro</h1>
            <RedesSociais/>
            <span>ou use e-mail para cadastro</span>
            <input type="text" id="signup-name" placeholder="Name" value={nome}></input>
            <input type="date" id ="signup-date" placeholder="Data de Nascimento" value={dataNascimento}></input>
            <input type="email" id="signup-email" placeholder="Email" value={email}></input>
            <input type="senha" id="signup-password" placeholder="Senha" value={senha}></input>
            <button type="submit" className="acao">Inscrever</button>
        </form>
 )


}