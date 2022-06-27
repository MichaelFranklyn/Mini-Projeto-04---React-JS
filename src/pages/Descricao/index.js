import './styles.css'
import Header from '../../components/Header'
import { teachers } from '../../data'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Descricao() {
    const { id } = useParams()
    const [allTeachers, setAllTeachers] = useState([...teachers])
    const [currentTeacher, setCurrentTeacher] = useState({})

    function current() {
        const findTeacher = allTeachers.find((teacher) => {
            return teacher.id === parseInt(id, 10)
        })

        if (!findTeacher) {
            return
        }

        setCurrentTeacher(findTeacher)
    }

    useEffect(() => {
        current()
    }, [])

    return (
        <div className='fundo descricao'>
            <Header showBtn={true} />

            <div className='descricao_teacher'>
                <img src={currentTeacher.avatar} alt='profile' />
                <div className='info'>
                    <h1>{currentTeacher.name}</h1>
                    <span>{currentTeacher.stack}</span>
                </div>
                <div className='bio'>
                    <span>Bio</span>
                    <p>{currentTeacher.bio}</p>
                </div>
            </div>

        </div>
    )
}