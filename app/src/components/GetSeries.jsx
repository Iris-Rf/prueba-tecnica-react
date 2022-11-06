import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


export const GetSeries = () => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => { 
    (async () => {
      const data = await fetch('http://localhost:8080/entries?programType=series').then((res) => res.json());
      setSeriesList(data);
    })();
    }, []);

  return (
<>
{seriesList.map((serie)=>(
    <div className='counterSeries' key={serie.title}>
        <img className='imageSeries' src={serie.images["Poster Art"].url}/>
        <h2>{serie.title}</h2>
    </div>
))}
</>
  );
};

export default GetSeries;