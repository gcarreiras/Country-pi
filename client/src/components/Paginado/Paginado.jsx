import React  from 'react';
import './Paginado.css'

export default function Paginado ({ countryInPage , allCountries , paginado}){
    
    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(allCountries.length/countryInPage) ; i++) { 
        
        // con este for voy a a saber cuantas paginas voy a tener dividiendo todos los paises por la cantidad que quiera
        //mostrar..... a tener en cuenta... puedo modificar la cantidad en cualquier momento desde el home, el math.ceil
        // es solo para redondear a un nro entero y el if de abajo es para ponerle un 0 y que todos los numeros me queden
        // de dos dijitos... seguramente haya alguna funcion que lo haga... pero bueno es lo mismo.-
        if (i < 10) pageNumbers.push('0' + i) 
        else pageNumbers.push(i)
    }

    return(
        <nav>  
            <ul className='unorderedListPag'>
                {pageNumbers &&
                    pageNumbers.map( number => (
                        <li className="number" key={number}>
                            <a onClick={()=>paginado(number)}>{number}</a>
                        </li>
                ))}
            </ul>
        </nav>

        

    )
}