import './App.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import PersonajesPage from './pages/PersonajesPage/PersonajesPage'
import CasasPage from './pages/CasasPage/CasasPage'
import CronologiaPage from './pages/CronologiaPage/CronologiaPage'
import HeadContainer from './components/HeadContainer/HeadContainer'
import DetallePersonajesPage from './pages/DetallePersonajesPage/DetallePersonajesPage'
import DetalleCasasPage from './pages/DetalleCasasPage/DetalleCasasPage'




function App() {

  // const location = useLocation();
  // const showHeader = !['/personajes/:id', '/casas/:id'].includes(location.pathname);

  return (
    <>
      <BrowserRouter>
        <HeadContainer />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/personajes' element={<PersonajesPage />} />
          <Route path='/personajes/:id' element={<DetallePersonajesPage />} />
          <Route path='/casas' element={<CasasPage />} />
          <Route path='/casas/:id' element={<DetalleCasasPage />} />
          <Route path='/cronologia' element={<CronologiaPage />} />
        </Routes>
        <Header />
        {/* {showHeader && <Header />} */}
      </BrowserRouter>

    </>
  )
}

export default App
