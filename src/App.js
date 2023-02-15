import {useState, createContext} from 'react';
import './App.css';
import {Form} from './components/Form/Form';
import {ListTasks} from './components/ListTasks/ListTasks';
import {Statistics} from './components/Statisitics/Statisitics';
import {useTranslation} from "react-i18next";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/Home";
import {Route, Routes} from "react-router-dom";

export const Theme = createContext('light');

function App() {
    // Создаем состояние списка постов
    const [tasks, setTask] = useState([]);
    //Создаем состояние счетчика списка постов за все время
    const [count, setCount] = useState(0);

    const [theme, setTheme] = useState('ligth');
    const [isNavbar, setNavbar] = useState(false);

    return (
        <Theme.Provider value={theme}>
            <div className="App">
                <Header theme={theme} setTheme={setTheme} setNavbar={setNavbar}/>
                <Navbar isNavbar={isNavbar} setNavbar={setNavbar}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/form'
                           element={<Form listTasks={tasks} setTask={setTask} count={count} setCount={setCount}/>}/>
                    <Route path='/listTasks' element={<ListTasks listTasks={tasks} setTask={setTask}/>}/>
                    <Route path='/statistics' element={<Statistics listTasks={tasks} count={count}/>}/>
                </Routes>
                <Footer/>
            </div>
        </Theme.Provider>
    );
}

export default App;
