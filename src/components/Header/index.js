import './styles.css';
import voltar from '../../assets/voltar.svg'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

function Header({showBtn}) {
    const navigate = useNavigate();

  return (
    <header>
        {showBtn && <img onClick={() => navigate('/main')} className='voltar' src={voltar} logo='btn voltar'/>}
        <img src={logo} logo='logo'/>
    </header>
  );
}

export default Header;