import React from 'react'
import './HeadContainer.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// import Style from './assets/components/'



export default function HeadContainer() {

    const { t, i18n } = useTranslation();
    const traducir = (leng) => {
        i18n.changeLanguage(leng);
    };

    // <p>{t('MENSAJE')}</p>
    // <button onClick={() => traducir('es')}>Español</button>
    // <button onClick={() => traducir('en')}>Inglés</button>


    return (
        <nav className='ecabezado'>
            <div className='home'>
                {/* <img src='src/components/styles/Images/home1.svg' /> */}
                <NavLink to={'/'}><img src='src/components/styles/Images/home1.svg' /></NavLink>
            </div>
            <div className='espanol'>
                <img src='src/components/styles/Images/flag-esp.svg' onClick={() => traducir('es')} />
                {/* <img src='src/components/styles/Images/flag-esp.svg' /> */}
                {/* <NavLink to={'http://localhost:3000'} ><img src='src/components/styles/Images/flag-esp.svg' /></NavLink> */}
                {/* <button onClick={() => traducir('es')}><img src='src/components/styles/Images/flag-esp.svg' /></button> */}
            </div>
            <div className='ingles'>
                <img src='src/components/styles/Images/flag-uk.svg' onClick={() => traducir('en')} />
                {/* <NavLink to={'http://localhost:3000'}><img src='src/components/styles/Images/flag-uk.svg' /></NavLink> */}

            </div>
        </nav >
    )
}
