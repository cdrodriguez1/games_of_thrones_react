import React, { useEffect, useState } from 'react'
import './PersonajesPage.scss'
import axios from 'axios';
import GalleryPersonajes from '../../components/GalleryPersonajes/GalleryPersonajes'
import Header from '../../components/Header/Header';


export default function PersonajesPages() {


    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const getPersonajes = async () => {
            const { data } = await axios('http://localhost:3000/characters');

            setPersonajes(data);
            // console.log(data);
        }
        getPersonajes();

    }, []);
    // console.log(personajes);

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            <GalleryPersonajes listPersonajes={personajes} />
            {/* <Header /> */}
        </div>
    )
}

