import './App.css';
import React, { useState, Suspense } from 'react';

// Haciendo code-splitting con un componente
/* 
  Para esto debemos usar React.lazy(()=>import("./archivo")) 

  Ahora que nuestro componente no se carga junto con toda nuestra aplicación, sino que se carga cuando lo necesitamos, lo que sucede es lo siguiente, react empieza a recorrer el arbol y cuando llega al punto en el cual tiene que mostrar el componente, lo solicita al servidor porque no se carga todo de una sola vez, y mientras lo recibe la actualización de la interfaz se suspende, es decir quedamos a la espera de la descarga de la red de este archivo para continuar haciendo el render de nuestra interface.

  Para poder continuar con este import dinamico de un componente, necesitamos usar Suspense (un componente especial de React).

  <Suspense fallback = { Aca debemos dejar un componente de respaldo para que se muestre en la interfaz mientras se termina de descargar el componente que deseamos. Ej: <p>Cargando...</p> }>  aqui colocamos el componente que se tiene que descargar mediante el import dinamico  </Suspense>

  En este caso quedaria así:

  <Suspense fallback = {<p>Cargando...</p>}> <Surprise/> </Suspense>


  Importante:
  Cuando React se ecuentra con un componente que se carga de manera dinamica va a buscar el Suspense más cercano que contenga al componente y todo lo que este dentro de Suspense se va a sustiruir por el prop fallback, Es por eso que siempre debemos tratar de colocar el Suspense lo más cerca posible del componente que se va a cargar de manera dinamica

*/
const Surprise = React.lazy( () => import('./Surprise') );

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <button onClick = { () => setShowSurprise(true) }>Mostrat sorpresa</button>
      {showSurprise && <Suspense fallback = {<p>Cargando...</p>}> <Surprise/> </Suspense> }
    </div>
  );
}

export default App;
