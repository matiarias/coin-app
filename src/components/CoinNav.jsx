import React from 'react'
import logo from '../img/coincap.png'
import { Link } from 'react-router-dom'
import CoinSearch from './CoinSearch'

const CoinNav = () => {
    return (
        <nav className='navbar navbar-expand-lg nav '>
            <div className='container justify-content-between'>
                <div>
                    <Link to='/'>
                    <img className='img-logo' src={logo} alt="logoCoin" />
                    </Link>
                </div>

                <ul className='navbar-nav mb-2 mb-lg-0'>
                    <CoinSearch />
                    <Link className='nav-link active link-cerrar-sesion' to='/login'> Cerrar Sesión</Link>
                </ul>

            </div>
        </nav>
    )
}

export default CoinNav