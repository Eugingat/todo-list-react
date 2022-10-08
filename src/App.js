import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { ListPosts } from './components/ListPosts/ListPosts';
import { Statistics } from './components/Statisitics/Statisitics';

function App() {
  // Создаем состояние списка постов
  const [ posts, setPost ] = useState([]);
  //Создаем состояние счетчика списка постов за все время
  const [ count, setCount ] = useState(0);

  return (
    <div className="App">
      <Form listPosts={posts} setPost={setPost} count={count} setCount={setCount}/>
      <Statistics listPosts={posts} count={count}/>
      <ListPosts listPosts={posts} setPost={setPost}/>
    </div>
  );
}

export default App;
