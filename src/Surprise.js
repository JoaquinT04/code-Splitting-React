import React, { useEffect } from "react";

export default (props) =>{

	// aquí se descarga todo el codigo de hello.js en otro chuck solo cuando presionamos el boton
	useEffect( () => {
    /* import dinamico */
    import("./hello")
      .then(mod => mod.default())
      /* Lo que tenemos como resultado de la promesa es el modulo, y la propiedad default me trae lo que exportamos por default */
  },[]);
	
	return(
		<div>
			<p>Sorpresa!!</p>
		</div>
	)
}