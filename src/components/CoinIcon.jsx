import React from 'react'

const CoinIcon = (props) => {

    const {symbol} = props

  return (
    <div>
        <img className='img-icon' src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={symbol} />
    </div>
  )
}

export default CoinIcon