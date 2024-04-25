'use client';
import Link from 'next/link'
import RedesSociais from './components/RedesSociais'




export default function Home() {

  



  return (
      
        <div className ="container">
            
          <div className ="form-container sign-in">
              <form id="login-form">
                  <h1>Entrar</h1>
                  <RedesSociais/>
                  <span>ou use sua senha de email</span>
                  <input type="email" id="login-email" placeholder="Email"></input>
                  <input type="password" id="login-password" placeholder="Password"></input>
                  <a href="#">Esqueceu sua senha?</a>
                  <button className="acao" id="entrarBtn">Entrar</button>

              </form>
          </div>




          <div className ="toggle-container">
              <div className ="toggle">
                  <div className ="toggle-panel toggle-right">
                      <h1>Novo por aqui?</h1>
                      <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                      <button className ="hidden" id="register"><Link href={"cadastro"}>Inscrever</Link></button>
                  </div>
              </div>
          </div>
      </div>
  )
}
