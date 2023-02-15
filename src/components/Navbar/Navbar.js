import './Navbar.css';
import {useContext} from "react";
import {Theme} from "../../App";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {paths} from "../../constants/paths";
import {useTranslation} from "react-i18next";

export const Navbar = ({isNavbar, setNavbar}) => {
    const theme = useContext(Theme);
    const isDarkTheme = theme === 'dark';
    const [t] = useTranslation();

    const changeViewNavbar = (event) => {
        if (event.target.classList.contains('navbar')) setNavbar((value) => !value);
    }

    const changeClass = (event) => {
        if (isDarkTheme) {
            if (event.target.classList.contains('dark-li')) event.target.classList.replace('dark-li', 'white-li')
            else event.target.classList.replace('white-li', 'dark-li');
        } else {
            if (event.target.classList.contains('white-li')) event.target.classList.replace('white-li', 'dark-li')
            else event.target.classList.replace('dark-li', 'white-li');
        }
    }

    return (
        <div className={classNames({none: true, 'navbar': isNavbar})} onClick={changeViewNavbar}>
            <aside className={classNames({openMenu: isNavbar, 'dark': theme === 'dark'})}>
                <ul>
                    {paths.map(({path, name}) => {
                        return (
                            <li key={name}>
                                <Link to={path}
                                      className={classNames({'dark-li': isDarkTheme, 'white-li': !isDarkTheme})}
                                      onMouseEnter={changeClass} onMouseLeave={changeClass}>
                                    {t(name)}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </div>
    )

}