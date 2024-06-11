import React, { useEffect, useState } from 'react'
import './CasasPage.scss'
import axios from 'axios';
import GalleryCasas from '../../components/GalleryCasas/GalleryCasas';



export default function CasasPage() {


    const [casas, setCasas] = useState([]);

    useEffect(() => {
        const getCasas = async () => {
            const { data } = await axios('http://localhost:3000/houses');

            setCasas(data);
            // console.log(data);
        }
        getCasas();
    }, []);
    // console.log(casas);

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            <div className='casas'>
                <GalleryCasas listCasas={casas} />
            </div>

        </div>
    )
}
