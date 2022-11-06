import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <>
    <div className="inicio">
      <Link to="peliculas">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-SnRxaAPG_TPaH9HOg-CrnJBOztoltntLdLn7UqCnIeSxGYHrjq0MbK6VzKP_gN1Z84&usqp=CAU"></img>
         <h3>Popular movies</h3>
       </Link>
        <Link to="series">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-SnRxaAPG_TPaH9HOg-CrnJBOztoltntLdLn7UqCnIeSxGYHrjq0MbK6VzKP_gN1Z84&usqp=CAU"></img>
         <h3>Popular series</h3>
        </Link>
          </div>
      </>
  )
}

export default Inicio