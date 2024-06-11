import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './GalleryCasas.scss'
import { useTranslation } from 'react-i18next';
// import { Scrollbars } from 'react-scrollbars-custom';


export default function GalleryCasas({ listCasas }) {

    const { t } = useTranslation();
    const [listCasasFilter, setListCasasFilter] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {

        if (listCasas && listCasas?.length) {

            if (inputSearch && inputSearch !== '') {
                const list = filterList(listCasas, inputSearch)
                setListCasasFilter(list)
            } else {
                setListCasasFilter(listCasas);
            }
        }

    }, [listCasas, inputSearch]);

    const filterList = (list, value) => {
        return list.filter(f => f.name.toUpperCase().includes(value.toUpperCase().trim()))
    }

    return (
        <div className='b-gallery-casas'>

            <div className='b-buscador-casas'>
                <img src='src/components/styles/Images/lupa.svg' />
                <input type="text" placeholder={t('COMMON.SEARCH')} value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
            </div>

            <div className='casas'>
                {listCasasFilter.length ? (
                    listCasasFilter.map((casa, index) => (
                        <div key={index}>
                            <Link className='b-name-casa' to={'/casas/' + casa.id}>
                                <div className='b-casa'>
                                    <img src={'http://localhost:3000' + casa.image} />
                                </div>
                                <h2>{casa.name}</h2>
                            </Link>
                        </div>
                    ))
                ) : (<div className='b-casa'>Houses not found...</div>)}
            </div>
        </div>

    )
}

