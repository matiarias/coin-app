import React, { useEffect, useState } from 'react'
import { getCoins } from './helpers/coinFetch'
import numeral from 'numeral'
import CoinIcon from './components/CoinIcon';
import LoadingIcon from './components/LoadingIcon';

import './css/styles.css'


const App = () => {

    const [coins, setCoins] = useState({ loading: true, datos: [] })

    const [update, setUpdate] = useState(false)

    useEffect(() => {

        getCoins().then((respuesta) => {

            console.log(respuesta);

            setCoins({
                loading: false,
                datos: respuesta
            })

        });
    }, [update]);

    return (

        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1>Cripto App</h1>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">

                    {coins.loading ? <LoadingIcon /> : (

                        <table className='table table-coin'>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Price Usd</th>
                                    <th>Market Cap</th>
                                    <th>VWAP (24hs)</th>
                                    <th>Supply</th>
                                    <th>Volumne (24hr)</th>
                                    <th>Change (24hr)</th>
                                    <th> <button className='btn-coin' onClick={() => setUpdate(!update)}>Update</button></th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    coins.datos.map((coin) => (

                                        <tr key={coin.id}>
                                            <td className='text-center'>{coin.rank}</td>

                                            <td className='d-flex justify-content-between'>
                                                <CoinIcon symbol={coin.symbol} />
                                                {coin.name}
                                            </td>

                                            <td>{numeral(coin.priceUsd).format('$0,0.00')}</td>
                                            <td>{numeral(coin.marketCapUsd).format('($ 0.00 a)')}</td>
                                            <td>{numeral(coin.vwap24Hr).format('$0,0.00')}</td>
                                            <td>{numeral(coin.supply).format('($ 0.00 a)')}</td>
                                            <td>{numeral(coin.volumeUsd24Hr).format('($ 0.00 a)')}</td>
                                            <td className={coin.changePercent24Hr > 0 ? 'text-success' : 'text-danger'}>{parseFloat(coin.changePercent24Hr).toFixed(2)}%</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                    )}



                </div>

            </div>

        </div>
    )
};

export default App