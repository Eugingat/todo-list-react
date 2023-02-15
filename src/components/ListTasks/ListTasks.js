import {Task} from "./Task/Task";

/**
 * Компонента по выводу списка задач
 * @param listTasks переменная состояния, в которой хранятся задачи
 * @param setTask функция по изменению состояния списка задач
 */
export const ListTasks = ({ listTasks, setTask }) => {

    /**
     * Фунция по удаления определенной задачи
     * @param {number} index Индекс элемента массива
     */
    const deleteTask = (index) => {
        // Копирем занчение пропсов в отдельный массив, потому что пропсы менять нельзя
        const tasks = [...listTasks];
        // Вырезаем задачу из массива
        tasks.splice(index, 1);
        // Создаем новое значение списка задач, без удаленного
        setTask([ ...tasks ])
    }

    return (
        <div>
            {listTasks.map((task, index) => {
                return (
                    <Task key={index} task={task} deleteTask={deleteTask}/>
                )
            })}
        </div>
    )
}