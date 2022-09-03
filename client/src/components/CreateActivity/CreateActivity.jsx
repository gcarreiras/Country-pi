import React , {useState, useEffect} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {getCountries , createActivity} from '../../actions';
import { useDispatch , useSelector } from 'react-redux';
import './CreateActivity.css'

export default function CreateActivity (){

const dispatch = useDispatch();
// const  history = useHistory();

const allCountries = useSelector(state => state.country)

useEffect(()=>{
    dispatch(getCountries())
}, []);

//le meti un ordenamiento sino era un caos
let allCountriesSort = allCountries.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  const [input , setInput] = useState({
    name: "",
    duration: "",
    season:"",
    dificulty: 1,
    country:[]
  })

  // aca podria crear una variable... para validar que el setinput
  // reciba el objeto que corresponde.....onda inputpost... donde 
  //convertir las horas en minutos
 
  function handleChange(e){
    console.log('HANDLECHANGE:' , e.target.id)
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    // cada vez que ejecuto esta funcion , ademas de lo que tiene le agrego el target value de lo que sea
    
}//onSubmit={(e)=> handleSubmit(e)} esta iria en el form
    
    return(
        <div className='createActivity'>
            <Link to='/home'><button>Back</button></Link>
            <form className= "formCreate" >
            
            <div>
                <label>Activity Name </label>
                <input className='activityName' name="Activity Name"
                
                type="text"
                onChange={(e) =>handleChange(e)}
                >
                </input>
            </div>
            <div>
                <label>Duration: </label>
                <input type="number" placeholder='0'></input>
                <label>Hs</label>
                <input type="number" placeholder='0'></input>
                <label>Min</label>
            </div>
            <div>
                <label>Countries: </label>
                <select>
                    {allCountriesSort.map(c=>(
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Season: </label>
                <select>
                <option > Choose Season </option>
                <option value = "Summer"> Summer </option>
                <option value = "Winter"> Winter </option>
                <option value = "Fall"> Fall </option>
                <option value = "Spring"> Spring </option>
                </select>
            </div>

            <div>
                <label>Dificulty:</label>
                <p className="clasificacion">
                    <input id="radio1" type="radio" name="estrellas" value="5"/>
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4"/>
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3"/>
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2"/>
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1"/>
                    <label for="radio5">★</label>
                </p>
            </div>
        
        </form>
        </div>
    )
}

//activity
//dificulty
//countries ----> ids en array
// duration 
//temporadas