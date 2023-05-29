import {useState, useContext} from 'react';
import './style.css';
import title_img from '../../assets/jp.svg';
import { ComponentsLogin } from '../components/loginComponents';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
    validate_name,
    validate_email, 
    validate_password, 
    validate_second_password
} from '../../validations/validation_login';

export default function Register() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secondPassword, setSecondPassword] = useState<string>('');

    function validate_fields(email:string, password:string):boolean{
        return (
            validate_name(name, "#msgName", 50) &&
            validate_email(email, "#msgEmail", 50) && 
            validate_password(password, "#msgPassword", 50) &&
            validate_second_password(password, secondPassword, "#msgSecondPassword")
        );
    }

    const createAccount = async () =>{
        const isValid:boolean = validate_fields(email, password);
        if(isValid)
        {
            const isRegistered = await auth.signup(name, email, password);
            if(isRegistered)
            {
                console.log("Registrado");
                navigate('/login');
            }
            else
                console.log("Deu errado em registrar");
        }
    }

    const clear_field = (fieldID: string):void =>{
        document.querySelector(`${fieldID}`)!.innerHTML = "";
    }

    return (
        <ComponentsLogin>
            <form action="" className="login-form">
                <span className="login-form-title">Signup</span>
                <span className="login-form-title"><img src={title_img} alt="" /></span>

                <div className='wrap-input-msg'>
                    <div className="wrap-input">
                        <input 
                            className={name !=="" ? 'has-val input' : 'input'}
                            type="email"
                            value={name}
                            onChange={e=>{setName(e.target.value);clear_field("#msgName")}} 
                        />
                        <span className="focus-input" data-placeholder='Name'></span>
                    </div>
                    <div className='msg-erros' id='msgName'></div>
                </div>

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
                            className={password !=="" ? 'has-val input' : 'input'}
                            type="password" 
                            value={password}
                            onChange={e=>{setPassword(e.target.value);clear_field("#msgPassword")}} 
                        />
                        <span className="focus-input" data-placeholder='Password'></span>
                    </div>
                    <div className='msg-erros' id='msgPassword'></div>
                </div>

                <div className='wrap-input-msg'>
                    <div className="wrap-input">
                        <input 
                            className={secondPassword !== "" ? 'has-val input' : 'input'}
                            type="password" 
                            value={secondPassword}
                            onChange={e=>{setSecondPassword(e.target.value);clear_field("#msgSecondPassword")}} 
                        />
                        <span className="focus-input" data-placeholder='Confirm Password'></span>
                    </div>
                    <div className='msg-erros' id='msgSecondPassword'></div>
                </div>

                <div className="container-login-form-btn">
                    <input type="button" className="login-form-btn" onClick={createAccount} value="Register" />
                </div>

            </form>
        </ComponentsLogin>
    )
}