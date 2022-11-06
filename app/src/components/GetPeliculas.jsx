import { useEffect, useState } from 'react';

export const GetPeliculas = () => {
  const [peliculasList, setPeliculasList] = useState([]);

  useEffect(() => { 
    (async () => {
      const data = await fetch('http://localhost:8080/entries?programType=movie').then((res) => res.json());
      setPeliculasList(data);
    })();
    }, []);

  return (
<>
{peliculasList.filter((peliculas) => peliculas.programType === 'movie' && peliculas.releaseYear >= 2010)
.map((pelicula)=>(
    <div className='counterPeliculas' key={pelicula.title}>
        <img className='imagePeliculas' src={pelicula.images["Poster Art"].url}/>
        <h2>{pelicula.title}</h2>
    </div>
))}
</>
  );
};

export default GetPeliculas;