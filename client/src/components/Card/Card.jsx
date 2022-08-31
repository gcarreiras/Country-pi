import React  from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCard } from '../../actions';
import { useEffect } from 'react';



export default function CountryCard (props){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCard(props.match.params.id)) // con las props accedo al id
    }, [dispatch])

    const myCard = useSelector(state => state.card) // me traigo el detail con esto asi renderizo
    
    const myActivity = useSelector(state => state.activity)
    
    return(
        <div>
            <Link to={'/Home'}>Back</Link>
            {
                myCard ?
                <>
                   <h2>Name: {myCard.name}</h2>
                   <h3>Country Code: {myCard.id}</h3>
                   <img src={myCard.image} alt = "Img Not Found" width="600px" height="350px"/>
                    <br></br>
                    <h4>Capital: {myCard.capital}</h4>
                    <h4>Subregion: {myCard.subregion}</h4>
                    <h4>Area: {myCard.area} km2</h4>
                    <h4>Population: {myCard.population}</h4>
                </>

                :<p> loading..... </p>
            }{


                myActivity?
                <>
                
                </>

                :<>loading</>

            }

            
        </div>
    )
}

// - [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// - [ ] Código de país de 3 letras (id)
// - [ ] Capital
// - [ ] Subregión
// - [ ] Área (Mostrarla en km2 o millones de km2)
// - [ ] Población
// - [ ] Actividades turísticas con toda su información asociada