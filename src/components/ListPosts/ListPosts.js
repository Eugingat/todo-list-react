/**
 * Компонента по выводу списка постов
 * @param listPosts переменная состояния, в которой хранятся посты
 * @param setPost функция по изменению состояния списка постов
 */
export const ListPosts = ({ listPosts, setPost }) => {

    /**
     * Фунция по удаления определенного поста
     * @param {number} index Индекс элемента массива
     */
    const deletePost = (index) => {
        // Копирем занчение пропсов в отдельный массив, потому что пропсы менять нельзя
        const posts = [...listPosts];
        // Вырезаем пост из массива
        posts.splice(index, 1);
        // Создаем новое значение списка постов, без удаленного
        setPost([ ...posts ])
    }

    return (
        <div>
            {listPosts.map((post, index) => {
                return (
                    <div key={index}>
                        <h2> { post.name } </h2>
                        <h2>{ post.surname }</h2>
                        <h2> { post.age  }</h2>
                        <h2> { post.gender }</h2>
                        <h3> {post.message }</h3>
                        <button onClick={() => deletePost(index)}> Delete </button>
                    </div>
                )
            })}
        </div>
    )
}