
import { Link } from 'react-router-dom'

import { useState } from 'react'

import iconPNG from '../../assets/icon.png'
import { LayoutComponents } from '../../Componentes/LayoutComponents'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Bem vindo!</span>
        <span className="login-form-title">
          <img src={iconPNG} alt="icone" /></span>

        <div className="wrap-input">
          <input className={email !== "" ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input className={senha !== "" ? 'has-val input' : 'input'}
            type="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}

          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="text1">Não possui conta?</span>

          <Link className="text2" to="/Register">Criar conta.</Link>
        </div>
      </form>

    </LayoutComponents>
  );
}