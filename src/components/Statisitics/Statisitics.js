import {useTranslation} from "react-i18next";

/**
 * Компонента по выводу статистики
 * @param listTasks переменная состояния, в которой хранятся задачи
 * @param count переменная состояния, в который хранится значение задач за все время
 */
export const Statistics = ({listTasks, count}) => {
    const [t] = useTranslation();

    return (
        <div>
            <h2> {t('contTaskAllTime')}: {count}</h2>
            <h2> {t('contTaskNow')}: {listTasks.length}</h2>
        </div>
    )
}