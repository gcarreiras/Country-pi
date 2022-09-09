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
    
    
    const act = useSelector(state=> state.act)
  
    
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

                
                act ?
                <>
                    
                    {myCard.activities.map(act => {
                        return(
                            <div key={myCard.id} >
                            <h2>Activity Name : {act.name} </h2>
                            <h3>Dificulty: {act.difficulty} stars</h3>
                            <h3>Duration: {act.duration} minutes</h3>
                            <h3>Season: {act.season}</h3>
                            <br/>
                        </div>
                        )
                    })}
                </>

                :<>sin actividades</>

            }

            
        </div>
    )
}

