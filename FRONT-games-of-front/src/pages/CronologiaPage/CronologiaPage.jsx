import React, { useEffect, useState } from 'react'
import './CronologiaPage.scss'
import axios from 'axios';
import './CronologiaPage.scss'


export default function CronologiaPage() {


    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const getPersonajes = async () => {
            const { data } = await axios('http://localhost:3000/characters');

            setPersonajes(data);
        }
        getPersonajes();
    }, []);
    // console.log(personajes);

    personajes.sort((a, b) => a.age - b.age);

    return (
        <>
            <div className='cronologia'>
                <div className='circulo-flecha'>
                    <img src='src/components/styles/Images/circulo-flecha.svg' />
                </div>
                <div className='white-line'>
                </div>
                {personajes.map((personaje, index) =>
                    <div key={index} className={index % 2 === 0 ? 'b-personaje-cronologia-par' : 'b-personaje-cronologia-impar'}>
                        <h4>{personaje.age}</h4>
                        <h3>{personaje.name}</h3>
                        <img src={'http://localhost:3000' + personaje.image} />
                    </div>
                )}
                {/* <Header /> */}
            </div>
        </>
    )
}

// style = {{ backgroundColor: 'black', minHeight: '100vh' }}

// className = 'b-box-cronologia'


