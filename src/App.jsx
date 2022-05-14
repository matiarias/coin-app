import React, { useEffect, useState } from 'react'
import { getCoins } from './helpers/coinFetch'

import './css/styles.css'

const App = () => {

    const [coins, setCoins] = useState({ loading: true, datos: [] })

    useEffect(() => {

        getCoins().then((respuesta) => {

            console.log(respuesta);

            setCoins({
                loading: false,
                datos: respuesta
            })

        });
    }, []);

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1>Cripto App</h1>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <table className='table table-coin'>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Price Usd</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                coins.datos.map((coin) => (

                                    <tr>
                                        <td>{coin.rank}</td>
                                        <td>{coin.name}</td>
                                        <td>{coin.priceUsd}</td>
                                        <td>{coin.marketCapUsd}</td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
};

export default App