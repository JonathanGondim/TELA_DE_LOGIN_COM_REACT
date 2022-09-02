
import { useState } from 'react'

import './styles.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 

  return (

    

    <div className="container">
      <div className="container-login">
       <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-tittle">FAZER LOGIN</span>

          <div className="wrap-input">
            <input className='input' 
            className={email !== "" ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            
            ></input>
            <span className="focus-input" data-placeholder="Usuário"></span>
          </div>

          <div className="wrap-input">
            <input className='input' type="password" className={email !== "" ? 'has-val input' : 'input'}></input>
            <span className="focus-input" data-placeholder="Senha"
            
            value={password}
            onChange={e => setPassword(e.target.value)}
            
            ></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta ?</span>
            <a className="txt2" href="#">Criar conta</a>
          </div>


        </form>
       </div>
      </div>
    </div>

  );
}

export default App;
