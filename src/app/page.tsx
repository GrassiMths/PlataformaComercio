import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import RedesSociais from './components/RedesSociais'

export default function Home() {
  return (
    <main className={styles.main}>
      
        <div className ="container" id="container">
          <div className ="form-container sign-up">
              <form id="signup-form">
                  <h1>Criar Conta</h1>
                  <RedesSociais/>
                  <span>ou use seu email para cadastro</span>
                  <input type="text" id="signup-name" placeholder="Name"></input>
                  <input type="email" id="signup-email" placeholder="Email"></input>
                  <input type="password" id="signup-password" placeholder="Senha"></input>
                  <button type="submit">Inscrever</button>
              </form>
              
          </div>
          <div className ="form-container sign-in">
              <form id="login-form">
                  <h1>Entrar</h1>
                  <RedesSociais/>
                  <span>ou use sua senha de email</span>
                  <input type="email" id="login-email" placeholder="Email"></input>
                  <input type="password" id="login-password" placeholder="Password"></input>
                  <a href="#">Esqueceu sua senha?</a>
                  <button id="entrarBtn"><Link href='catalogo'>Entrar</Link></button>

              </form>
          </div>
          <div className ="toggle-container">
              <div className ="toggle">
                  <div className ="toggle-panel toggle-left">
                      <h1>Bem vindo de volta!</h1>
                      <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                      <button className ="hidden" id="login">Entrar</button>
                  </div>
                  <div className ="toggle-panel toggle-right">
                      <h1>Olá, amigo!</h1>
                      <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                      <button className ="hidden" id="register">Inscrever</button>
                  </div>
              </div>
          </div>
      </div>

    </main>
  )
}
