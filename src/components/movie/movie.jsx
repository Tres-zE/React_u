//este componente lo ocuparemos varias veces, es decir, lo vamos a reutilizar
import React from 'react';

const Movie = (props) => {
  return (
    <>
      <div>{props.datos.titulo}</div>
      <div>{props.datos.genero}</div>
      <div>{props.datos.director}</div>
      <div>{props.datos.anio}</div>
      <hr /> {/*hr es un salto de linea */}
    </>
  );
};

export default Movie;

//este componente lo usaremos en Movies, veremos la magia
