import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// *------------------------------- Repaso Promesas Javascript --------------------------------------

// const promesa = () => {

//   return new Promise((resolve, reject) => {

//     let validar = false;

//     setTimeout(() => {

//       if (validar) {

//         resolve('la promesa fue exitosa')

//       } else {

//         reject('la promesa fallo')
//       }

//     }, 2000);

//   });
// };

// con el metodo then capturamos resolve, y con el metodo catch capturamos lo que trae reject

// promesa().then(respuesta => (console.log(respuesta)))
//   .catch(error => (console.log(error)))

// *---------------------------- Repaso del metodo Fetch -------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((resp) => resp.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// *------------------------------- async await --------------------------------------

// ?---utilizar async await para peticiones fetch es una buena practica y es como se usa ahora---

/* 

const peticionHttp = async () => {

  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const resultado = await respuesta.json();
    return resultado

  } catch (error) {

    return error

  }
};

peticionHttp().then((respuesta) => {

  let datosRecibidos = respuesta
  console.log(datosRecibidos)
})
  .catch((error) => console.log(error))

*/








