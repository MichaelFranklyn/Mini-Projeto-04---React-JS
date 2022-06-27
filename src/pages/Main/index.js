import './styles.css';
import Header from '../../components/Header'
import CardTeacher from '../../components/CardTeacher';
import { teachers } from '../../data'

function Main() {

  return (
    <div className='fundo main'>
      <Header />
      <div className='container_cards'>
      {teachers.map((teacher) => (
        <CardTeacher
          key={teacher.id}
          teacher={teacher}
        />
      ))}
      </div>
    </div>
  );
}

export default Main;