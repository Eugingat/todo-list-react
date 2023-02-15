import './Header.css';
import {useContext} from "react";
import {Theme} from "../../App";
import {BsMoon, BsLayoutSidebarReverse, BsSun} from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import classNames from "classnames";
import {Link} from "react-router-dom";

export const Header = ({ theme, setTheme, setNavbar }) => {
    const [t] = useTranslation();

    const changeTheme = () => {
        if (theme === 'ligth') setTheme('dark')
        else setTheme('ligth')
    }

    const viewIconTheme = () => {
        return theme === 'ligth' ? <BsMoon/> : <BsSun/>;
    }

    const changeViewNavbar = () => {
        setNavbar((value) => !value);
    }

    return (
        <header className={classNames({'dark': theme === 'dark'})}>
            <div onClick={changeViewNavbar}>
                <BsLayoutSidebarReverse/>
            </div>

            <div>
                <Link to='/'> {t('title')} </Link>
            </div>

            <div onClick={changeTheme}>
                {viewIconTheme()}
            </div>

        </header>
    );
}