import {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './style.css';
import title_img from '../../assets/jp.svg';
import { ComponentsLogin } from '../components/loginComponents';
import { 
  validate_email_login,
  validate_password_login 
} from '../../validations/validation_login';

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');

  function validate_fields(email:string, password:string):boolean{
    return (
        validate_email_login(email, "#msgEmail") && 
        validate_password_login(password, "#msgPassword")
    );
  }

  const handleLogin = async () =>{
    const isValid:boolean = validate_fields(email, password);
    if(isValid)
    {
        const isLogged = await auth.signin(email, password);
        if(isLogged)
        {
          navigate('/');
        }
        else
        {
          alert("Não deu certo");
        }
    }
  }

  const clear_field = (fieldID: string):void =>{
    document.querySelector(`${fieldID}`)!.innerHTML = "";
  }

  return (
    <ComponentsLogin>
      <form action="" className="login-form">
        <span className="login-form-title">Welcome!</span>
        <span className="login-form-title"><img src={title_img} alt="" /></span>

        <div className='wrap-input-msg'>
          <div className="wrap-input">
            <input 
              className={email !== "" ? 'has-val input' : 'input'}
              type="email"
              value={email}
              onChange={e=>{setEmail(e.target.value);clear_field("#msgEmail")}} 
            />
            <span className="focus-input" data-placeholder='Email'></span>
          </div>
          <div className='msg-erros' id='msgEmail'></div>
        </div>

        <div className='wrap-input-msg'>
          <div className="wrap-input">
            <input 
              className={password !== "" ? 'has-val input' : 'input'}
              type="password" 
              value={password}
              onChange={e=>{setPassword(e.target.value);clear_field("#msgPassword")}} 
            />
            <span className="focus-input" data-placeholder='Password'></span>
          </div>
          <div className='msg-erros' id='msgPassword'></div>
        </div>

        <div className="container-login-form-btn">
          <input type="button" className="login-form-btn" onClick={handleLogin} value="Login"/>
        </div>

        <div className="text-center">
          <span className="txt1">Don't have an account?</span>
          <Link to="/Register" className="txt2">Create account</Link>
        </div>

      </form>
      </ComponentsLogin>
  )
}
