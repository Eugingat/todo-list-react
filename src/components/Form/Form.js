import {useState} from "react"
import './Form.css';
import classNames from "classnames";
import {useTranslation} from "react-i18next";

/**
 * Компонента по созданию постов
 * @param listTasks переменная состояния, в которой хранятся задачи
 * @param setTask функция по изменению состояния списка задач
 * @param count переменная состояния, в который хранится значение задач за все время
 * @param setCount функция по изменению значения задач за все время
 */
export const Form = ({listTasks, setTask, count, setCount}) => {
    const [t] = useTranslation();
    // Создаем состояние, для всех тэгов формы, ввиде обьекта
    const [userValue, setUserValue] = useState({
        name: '',
        surname: '',
        age: '',
        gender: 'man',
        message: ''
    });

    const [formValidation, setFormValidation] = useState({
        name: {
            empty: false,
            maxLength: false
        },
        surname: {
            empty: false,
            maxLength: false
        },
        age: {
            empty: false,
            maxLength: false,
            isNumber: false
        },
        message: {
            empty: false,
        },
    })

    /**
     * Функция по изменению состояние формы, но только ключа имени
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setName = (event) => {

        if (!event.target.value.trim()) {
            setFormValidation({...formValidation, name: {empty: true, maxLength: false}});
        } else {
            if (event.target.value.length > 20) {
                setFormValidation({...formValidation, name: {empty: false, maxLength: true}});
            } else {
                setFormValidation({...formValidation, name: {empty: false, maxLength: false}});
            }

        }

        setUserValue({...userValue, name: event.target.value})
    }

    const isValid = () => {
        let valid = true;

        for (let keyValidation in formValidation) {
            for (let errorValue in formValidation[keyValidation]) {
                if (formValidation[keyValidation][errorValue]) {
                    valid = false;
                    break;
                }
            }
        }
        return valid;
    }


    /**
     * Функция по изменению состояние формы, но только ключа фамилии
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setSurname = (event) => {
        if (!event.target.value.trim()) {
            setFormValidation({...formValidation, surname: {empty: true, maxLength: false}});
        } else {
            if (event.target.value.length > 20) {
                setFormValidation({...formValidation, surname: {empty: false, maxLength: true}});
            } else {
                setFormValidation({...formValidation, surname: {empty: false, maxLength: false}});
            }

        }

        setUserValue({...userValue, surname: event.target.value})
    }

    /**
     * Функция по изменению состояние формы, но только ключа возраст
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setAge = (event) => {
        if (!event.target.value.trim()) {
            setFormValidation({...formValidation, age: {empty: true, maxLength: false, isNumber: false}});
        } else {
            if (!+event.target.value) {
                setFormValidation({...formValidation, age: {empty: false, maxLength: false, isNumber: true}});
            } else {
                if (event.target.value.length > 3) {
                    setFormValidation({...formValidation, age: {empty: false, maxLength: true, isNumber: false}});
                } else {
                    setFormValidation({...formValidation, age: {empty: false, maxLength: false, isNumber: false}});
                }
            }


        }
        setUserValue({...userValue, age: event.target.value})
    }

    /**
     * Функция по изменению состояние формы, но только ключа пола
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setGender = (event) => {
        setUserValue({...userValue, gender: event.target.value})
    }

    /**
     * Функция по изменению состояние формы, но только ключа сообщения
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setMessage = (event) => {
        if (!event.target.value.trim()) {
            setFormValidation({...formValidation, message: {empty: true}});
        } else {
            setFormValidation({...formValidation, message: {empty: false}});
        }

        setUserValue({...userValue, message: event.target.value});
    }

    /**
     * Функция создания задачи
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const createTask = (event) => {
        // Прерываем события по умолчанию, чтобы страничка не перезагружалась
        event.preventDefault();
        // Изменияем состояние списка форм, копируя старое значение и добавляю новое
        setTask([...listTasks, userValue]);
        //Изменямеи состояние счетчика списка постов за все время
        setCount(count + 1)
    }

    return (
        <form onSubmit={createTask} className='form'>
            <div>
                <label>
                    {t('labelName')}*:
                </label>
                <input value={userValue.name} onChange={setName} placeholder={t('placeholderName')}
                       className={classNames({'error': formValidation.name.empty || formValidation.name.maxLength})}/>
                {formValidation.name.empty && <small> {t('errorEmpty')} </small>}
                {formValidation.name.maxLength && <small> {t('errorMaxLength', { count: 20})} </small>}
            </div>
            <div>
                <label>
                    {t('labelSurname')}*:
                </label>
                <input value={userValue.surname} onChange={setSurname} placeholder={t('placeholderSurname')}
                       className={classNames({'error': formValidation.surname.empty || formValidation.surname.maxLength})}
                />
                {formValidation.surname.empty && <small> {t('errorEmpty')} </small>}
                {formValidation.surname.maxLength && <small> {t('errorMaxLength', { count: 20})} </small>}

            </div>
            <div>
                <label>
                    {t('labelAge')}*:
                </label>
                <input value={userValue.age} onChange={setAge} placeholder={t('placeholderAge')}
                       className={classNames({'error': formValidation.age.empty || formValidation.surname.maxLength || formValidation.age.isNumber})}/>
                {formValidation.age.empty && <small> {t('errorEmpty')} </small>}
                {formValidation.age.isNumber && <small> {t('errorNotNumber')} </small>}
                {formValidation.age.maxLength && <small> {t('errorMaxLength', { count: 3})} </small>}

            </div>
            <div>
                <label>
                    {t('labelGender')}:
                </label>
                <select value={userValue.gender} onChange={setGender}>
                    <option value='man'> {t('man')}</option>
                    <option value='women'> {t('women')}</option>
                </select>
            </div>
            <div>
                <label>
                    {t('labelComment')}*:
                </label>
                <textarea value={userValue.message} onChange={setMessage}
                          className={classNames({'error': formValidation.message.empty})}>
                </textarea>
                {formValidation.message.empty && <small> {t('errorEmpty')} </small>}
            </div>

            <button type='submit' className={classNames({'btn-form': isValid(), 'btn-disabled': !isValid()})}
                    disabled={!isValid()}> {t('btnFormTask')}
            </button>
        </form>
    )
}