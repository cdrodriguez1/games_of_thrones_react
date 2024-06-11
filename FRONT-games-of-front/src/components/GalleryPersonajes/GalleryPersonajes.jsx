import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './GalleryPersonajes.scss'
import { useTranslation } from 'react-i18next';


export default function GalleryPersonajes({ listPersonajes }) {

    const { t } = useTranslation();
    const [listPersonajesFilter, setlistPersonajeFilter] = useState([]);
    const [inputSearch, setInputSearch] = useState('')


    useEffect(() => {
        // console.log(inputSearch);

        if (listPersonajes && listPersonajes?.length) {

            if (inputSearch && inputSearch !== '') {
                const list = filterList(listPersonajes, inputSearch)
                // console.log(list, inputSearch);

                setlistPersonajeFilter(list)
            } else {
                setlistPersonajeFilter(listPersonajes);
            }
        }

    }, [listPersonajes, inputSearch])

    const filterList = (list, value) => {
        return list.filter(f => f.name.toUpperCase().includes(value.toUpperCase().trim()))
    }

    return (
        <div className='b-gallery-personajes'>
            <div className='b-buscador-personajes'>
                {/* <button><img src='src/components/styles/Images/lupa.svg' /></button> */}
                <img src='src/components/styles/Images/lupa.svg' />
                <input type="text" placeholder={t('COMMON.SEARCH')} onKeyUp={(e) => { setInputSearch(e.target.value) }} />
            </div>
            <div className='personajes'>
                {listPersonajesFilter.length ?
                    listPersonajesFilter.map((personaje, index) => (
                        <div className='b-personaje' key={index}>
                            <img src={'http://localhost:3000' + personaje.image} />
                            <Link className='b-name' to={'/personajes/' + personaje.id}><h2>{personaje.name}</h2></Link>
                        </div>
                    )) : (<div className='b-personaje'>Character not found...</div>)}
            </div>
        </div>

    )
}


