import './style.css'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

export default function Login () {
    const navigate = useNavigate();

    return (
        <div className='fundo'>
            <form className='form'>
                <img src={logo} alt='logo' />

                <div className='login_input'>
                <input type='text' placeholder='E-mail' ></input>
                <input type='password' placeholder='Digite a senha' ></input>
                <span>Não tem cadastro? Clique aqui!</span>
                </div>

                <button onClick={() => navigate('/main')}>Login</button>
            </form>
        </div>
    )
}