import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './DetalleCasasPage.scss'
import { useTranslation } from 'react-i18next';

export default function DetalleCasasPage() {

    const { id } = useParams();
    const [casa, setCasa] = useState({});

    useEffect(() => {
        const getCasa = async () => {
            const { data } = await axios('http://localhost:3000/houses/' + id);
            setCasa(data);
            // console.log(data);
        }
        getCasa();
    });
    // console.log(casa);

    const { t, i18n } = useTranslation();
    const traducir = (leng) => {
        i18n.changeLanguage(leng);
    };
    traducir();

    return (
        <div className='container-detalle-casa'>
            <div className='volver-casas'>
                <NavLink to={'/casas'}><img src='/src/components/styles/Images/volver.svg' alt='Volver' /></NavLink>
                <p>{t('MENS-VOLVER')}</p>
            </div>
            <div className='b-detalle-casa'>
                <div className='b-img-name-casa'>
                    <img src={'http://localhost:3000' + casa.image} />
                    <h2>{casa.name}</h2>
                </div>
                <div className='b-inf-dc'>
                    <div>
                        <h2>{t('MENS-SEDE')}</h2>
                        <p>{casa.settlement}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-REGI')}</h2>
                        <p>{casa.region}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-ALIAN')}</h2>
                        <p>{casa.alliances}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-RELI')}</h2>
                        <p>{casa.religions}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-FUND')}</h2>
                        <p>{casa.foundation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}