import React from 'react'
import logo from '../img/coincap.png'

const CoinNav = () => {
    return (
        <nav className='nav navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid justify-content-center'>
                <div>
                    <img className='img-logo' src={logo} alt="logoCoin" />
                </div>

            </div>

        </nav>
    )
}

export default CoinNav