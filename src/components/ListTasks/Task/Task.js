import './Task.css';
import {useTranslation} from "react-i18next";

export const Task = ({index, task, deleteTask}) => {
    const [t] = useTranslation();

    return (
        <div className='task'>
            <div className='titlePerson'>
                <h3>
                    { task.surname }  { task.name } - { task.age  } {t('age')}
                </h3>
            </div>
            <div className='genderPerson'>
                <p> {t('gender')}: { t(task.gender) }</p>
            </div>
            <div className='messagePerson'>
                <p> {task.message }</p>
            </div>
            <button className='btnDelTask' onClick={() => deleteTask(index)}> Delete </button>
        </div>
    );
}