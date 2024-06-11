import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './DetallePersonajesPage.scss'
import { useTranslation } from 'react-i18next';

export default function DetallePersonajesPage() {

    const { id } = useParams();
    const [personaje, setPersonaje] = useState({});

    //__________________________
    const [casa, setCasa] = useState([]);
    //__________________________

    useEffect(() => {
        const getPersonaje = async () => {
            const { data } = await axios('http://localhost:3000/characters/' + id);
            // personaje.id
            setPersonaje(data);
            // console.log(data);
        }
        getPersonaje();
    }, []);
    // console.log(personaje);

    //__________________________traemos las casas
    useEffect(() => {
        const getCasa = async () => {
            const { data } = await axios('http://localhost:3000/houses');
            setCasa(data);
            // console.log(data);
        }
        getCasa();
    }, []);

    const findHouseByName = (houseName) => {
        return casa.find((casa) => casa.name === houseName)
    }
    const casaPersonaje = findHouseByName(personaje.house);
    // console.log(casa);
    //__________________________

    const { t, i18n } = useTranslation();

    return (
        <div className='container-detalle-personajes'>
            <div className='volver-personajes'>
                <NavLink to={'/personajes'}><img src='/src/components/styles/Images/volver.svg' alt='Volver' /></NavLink>
                <p>{t('MENS-VOLVER')}</p>
            </div>
            <div className='b-detalle-personaje'>
                <div className='b-img-name'>
                    <img src={'http://localhost:3000' + personaje.image} />
                    <h2>{personaje.name}</h2>
                </div>
                <div className='b-inf-dp'>
                    <div className='casa-personaje'>
                        <h2>{t('MENS-CAS')}</h2>
                        <p>{personaje.house}</p>
                        {casaPersonaje && (
                            <img src={'http://localhost:3000' + casaPersonaje.image} />
                        )}

                    </div>
                    <div>
                        <h2>{t('MENS-ALIAN')}</h2>
                        <p>{personaje.alliances}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-APA')}</h2>
                        <p>{personaje.episodes}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-PAD')}</h2>
                        <p>{personaje.parents}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-DESC')}</h2>
                        <p>{personaje.siblings}</p>
                    </div>
                    <div>
                        <h2>{t('MENS-TIT')}</h2>
                        <p>{personaje.titles}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* <Link to={'http://localhost:3000' + personaje.id}><h2>{personaje.name}</h2></Link> */
// 'http://localhost:3000'
// http://localhost:3000/characters/