import './App.css';
import { useEffect, useState } from 'react';
import Surprise from './Surprise';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  // import dinamico me carga en un chuck.js aparte todo el codigo de surprise
  /*useEffect( () => {
    // import dinamico 
    import("./hello")
      .then(mod => mod.default())
      /* Lo que tenemos como resultado de la promesa es el modulo, y la propiedad default me trae lo que exportamos por default 
  },[]);
  */
  return (
    <div>
      <button onClick = { () => setShowSurprise(true) }>Mostrat sorpresa</button>
      {showSurprise && <Surprise/>}
    </div>
  );
}

export default App;
