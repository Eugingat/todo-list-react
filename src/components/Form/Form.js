import { useState } from "react"

/**
 * Компонента по созданию постов
 * @param listPosts переменная состояния, в которой хранятся посты
 * @param setPost функция по изменению состояния списка постов
 * @param count переменная состояния, в который хранится значение постов за все время
 * @param setCount функция по изменению значения постов за все время
 */
export const Form = ({ listPosts, setPost, count, setCount }) => {
    // Создаем состояние, для всех тэгов формы, ввиде обьекта
    const [ userValue, setUserValue ] = useState({
        name: '',
        surname: '',
        age: '',
        gender: 'man',
        message: ''
    });

    /**
     * Функция по изменению состояние формы, но только ключа имени
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setName = (event) => {
        setUserValue({ ...userValue, name: event.target.value })
    }

    /**
     * Функция по изменению состояние формы, но только ключа фамилии
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setSurname = (event) => {
        setUserValue({ ...userValue, surname: event.target.value })
    }

    /**
     * Функция по изменению состояние формы, но только ключа возраст
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setAge = (event) => {
        setUserValue({ ...userValue, age: event.target.value })
    }

    /**
     * Функция по изменению состояние формы, но только ключа пола
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setGender = (event) => {
        setUserValue({ ...userValue, gender: event.target.value })
    }

    /**
     * Функция по изменению состояние формы, но только ключа сообщения
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const setMessage = (event) => {
        setUserValue({ ...userValue, message: event.target.value })
    }

    /**
     * Функция создания поста
     * @param {Event} event Объект события, который хранит информацию о тэге в котором было событие
     */
    const createPost = (event) => {
        // Прерываем события по умолчанию, чтобы страничка не перезагружалась
        event.preventDefault();
        // Изменияем состояние списка форм, копируя старое значение и добавляю новое
        setPost([ ...listPosts, userValue ]);
        //Изменямеи состояние счетчика списка постов за все время
        setCount(count + 1)
    }
 
    return (
        <form onSubmit={createPost}>
            <input value={userValue.name} onChange={setName} placeholder='Введите имя'/>
            <input value={userValue.surname} onChange={setSurname} placeholder='Введите фамилию'/>
            <input value={userValue.age} onChange={setAge} placeholder='Введите возраст'/>
            <select value={userValue.gender} onChange={setGender}>
                <option value='man'> Мужчина </option>
                <option value='women'> Женщина </option>
            </select>
            <textarea value={userValue.message} onChange={setMessage}>

            </textarea>
            <input type='submit' value='Создать пост'/>
        </form>
    )
}