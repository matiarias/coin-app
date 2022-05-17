import React from 'react'

const CoinPagination = (props) => {

    const pagination = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const { pagina, setPagina } = props

    const nextPage = () => {

        if (pagina < 90) {

            setPagina(pagina + 10)
        }

    };

    const prevPage = () => {

        if (pagina >= 10) {

            setPagina(pagina - 10)
        }

    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={pagina < 10 ? "page-item disabled" : "page-item"}>
                    <button className="page-link" onClick={prevPage}>Previous</button>
                </li>

                {
                    pagination.map((pag, index) => (

                        <li key={index} className={pag*10 === pagina ? "page-item active" : "page-item"}>
                            <button className="page-link" onClick={() => setPagina(pag*10)}>{pag+1}</button>
                        </li>
                    ))
                }

                <li className={pagina === 90 ? "page-item disabled" : "page-item"}>
                    <button className="page-link" onClick={nextPage}>Next</button>
                </li>
            </ul>
        </nav>
    )
}

export default CoinPagination