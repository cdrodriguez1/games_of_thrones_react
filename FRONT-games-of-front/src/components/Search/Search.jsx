import React from 'react'
import './Search.scss'

export default function Search() {


    return (
        <div className='b-buscador-personajes'>
            {/* <button><img src='src/components/styles/Images/lupa.svg' /></button> */}
            <img src='src/components/styles/Images/lupa.svg' />
            <input type="text" placeholder='Buscar'></input>
        </div>
    )
}
