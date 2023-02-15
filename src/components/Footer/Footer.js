import {useTranslation} from "react-i18next";
import './Footer.css'
import {useContext} from "react";
import {Theme} from "../../App";
import classNames from "classnames";

export const Footer = () => {
    const [t, i18n] = useTranslation();
    const theme = useContext(Theme);

    const changeLang = () => {
        const currentLang = i18n.language;

        currentLang === 'en' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
    }

    return (
        <footer className={classNames({'dark': theme === 'dark'})}>
            <span onClick={changeLang}>
                {t('descriptionAboutLang')}
            </span>
        </footer>
    );
}