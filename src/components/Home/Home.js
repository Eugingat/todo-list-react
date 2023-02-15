import {useTranslation} from "react-i18next";
import {paths} from "../../constants/paths";
import './Home.css';
import {Link} from "react-router-dom";

export const Home = () => {
    const [t] = useTranslation();

    return (
        <>
            <h1> {t('titleHome')}</h1>

            <div className='review-page'>
                {paths.map(({name, description, path}) => {
                    if (name !== 'home') {
                        return (
                            <Link key={name} to={path}>
                                <h3> {t(name)}</h3>
                                <p> {t(description)}</p>
                            </Link>
                        )
                    }
                })}
            </div>
        </>
    )
}