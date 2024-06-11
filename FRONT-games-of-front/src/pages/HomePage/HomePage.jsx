import React from 'react'
import './HomePage.scss'
import Header from '../../components/Header/Header'
import { useTranslation } from 'react-i18next';


export default function HomePage() {

    const { t } = useTranslation();

    return (
        <>
            <div className='home-b'>
                <div className='title'>
                    <div className='text-1'>
                        <h1>{t('HOME_PAGE.GAMES_OF')}</h1>
                    </div>
                    <div className='text-2'>
                        <h1>{t('HOME_PAGE.THRONES')}</h1>
                    </div>
                </div>
            </div>
            {/* <Header /> */}
        </>
    )
}
