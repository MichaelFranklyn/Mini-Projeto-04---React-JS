import './styles.css'
import { useNavigate } from 'react-router-dom'

export default function CardTeacher({ teacher }) {
    const navigate = useNavigate();

    return (
        <div className='cardTeacher' onClick={() => navigate(`/detalhe/${teacher.id}`)}>
            <img src={teacher.avatar} alt='profile' />
            <h1>{teacher.name}</h1>
        </div>
    )
}