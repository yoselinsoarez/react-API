import './App.css';
import { useEffect, useState } from 'react';




function App() {
  const [datos, setDatos] = useState ([])
  
  useEffect( () => {
    const url='https://randomuser.me/api/?results=3';
    const peticion=fetch(url);
    peticion
    .then(datos => datos.json())
    .then(lectura => {
      lectura.results.map((persona) => (
        setDatos( (e) =>
        [...e,<div className='personas' key={persona.email}>
          <div>{persona.name.title} {persona.name.first} {persona.name.last}</div>
          <div className='imagenes'>
            <img src={persona.picture.large} alt=''/>
          </div>
        </div>])
        
        
        
            
      ))
    })
    .catch (() => console.log('se ha producido un error'))
  }, [])
  
  
  return (
    <>
    <h1>Ganador@s</h1>
    {datos}
    </>
  );
}

export default App;
