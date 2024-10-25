import React from 'react';
import Movie from './movie'; //este es el componente Movie

const Movies = () => {
  //agregamos un array de objetos
  const movies = [
    {
      titulo: 'Terminator',
      genero: 'Acción',
      director: 'James Cameron',
      anio: '1996',
    },
    {
      titulo: 'Top Gun',
      genero: 'Acción',
      director: 'Tony Scott',
      anio: '1986',
    },
    {
      titulo: 'Man of Steel',
      genero: 'Acción',
      director: 'Zack Snyder',
      anio: '2013',
    },
  ];
  return (
    <>
      <div>
        <h2>Peliculas</h2>
      </div>
      <div>Pelicula Contenido</div>
      {/* aplicaremos la funcion map para recorrer el array 
      
      FORMA 1 PARA MOSTRAR EN PANTALLA
      {movies.map((movie) => (
        <>
          <div>{movie.titulo}</div>
          <div>{movie.genero}</div>
          <div>{movie.director}</div>
          <div>{movie.anio}</div>
          <hr />
        </>
      ))}
    
    FORMA 2 PERO AHORA CON EL COMPONENTE MOVIE
    */}
      {movies.map((movie) => (
        <Movie datos={movie} />
      ))}
    </>
  );
};

export default Movies;

/* 
  En React, esos símbolos <> y </> se llaman Fragments o tags vacios. Los Fragments te permiten agrupar una lista de hijos sin agregar nodos extra al DOM. Básicamente, te ayudan a devolver múltiples elementos desde un componente sin necesidad de envolverlos en un solo nodo.
  Usando <> y </> puedes evitar añadir un div extra ya que nos daria un error, manteniendo el DOM más limpio.
*/
