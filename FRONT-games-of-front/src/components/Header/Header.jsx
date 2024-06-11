import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import { useTranslation } from 'react-i18next';


export default function Header() {

    const { t, i18n } = useTranslation();
    const traducir = (leng) => {
        i18n.changeLanguage(leng);
    };
    traducir();

    return (

        <header className='nav-container'>
            <nav className='text-header'>
                <NavLink to='/personajes'>  {t('HOME_PAGE.PERSONAJES')} </NavLink>
                <NavLink to='/casas'>   {t('HOME_PAGE.CASAS')}   </NavLink>
                <NavLink to='/cronologia'>  {t('HOME_PAGE.CRONOLOGIA')} </NavLink>
            </nav>
        </header>
    )
}

{/* <p>{t('MENSAJE')}</p> */ }