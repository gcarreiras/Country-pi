import React , {useState, useEffect} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {getCountries , createActivity} from '../../actions';
import { ReactReduxContext, useDispatch , useSelector } from 'react-redux';
import './CreateActivity.css'

export default function CreateActivity (){

const dispatch = useDispatch();
const  history = useHistory();

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
    durationHr: "",
    durationMin: "",
    season:"",
    difficulty: 1,
    country:[]
  })

  function funPostActivity (){
    let auxArray = [] 
     
    //aca me guardo solo el id... ya que tenia el name y la img [[]]
    for (let i = 0 ; i < input.country.length ; i ++){
         auxArray.push([input.country[i][2]])
        }

        let  postActivity = {
        name : input.name,
        difficulty: input.difficulty,
        duration : parseInt(input.durationHr * 60) + parseInt(input.durationMin),
        season: input.season,
        country: auxArray.flat()
    }  
    return postActivity;     
  } 

 
  function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    // cada vez que ejecuto esta funcion , ademas de lo que tiene le agrego el target value de lo que sea
}

function checkFunction(){

    if (input.name. length > 50 ){
        alert ('name must be more short 🤷‍♂️')
        return false
    }
    
    
    return true;

}

function handleSubmit(e){
    e.preventDefault()
    if(checkFunction()){
        dispatch(createActivity(funPostActivity()))
        alert("successful creation!!")
        setInput({
            name: "",
            durationHr: "",
            durationMin: "",
            season:"",
            difficulty: 1,
            country:[]
        })
        history.push('/home')
        
    }
}

function handleSelect(e){
    e.preventDefault()
    let newArray = e.target.value.split(',')
    setInput({
        ...input,
        country: [...input.country , newArray]
    })
}

function handleSelectSeason(e){
    e.preventDefault()
    setInput({
        ...input,
        season: e.target.value
    })
}

function handleDelete(e){
    e.preventDefault()
    for (let i = 0 ; i < input.country.length ; i++){
        if (e.target.id == [input.country[i][0]])
            input.country.splice(i,1)
    }
    setInput({
        ...input
    })
    
    // let newArray =  input.country.filter(c => c !== e.target.id)
    //     setInput({
    //         ...input,
    //        country : newArray
    //     })
    // bueno quedo mas cortita al final =) las modificaciones y esos dos array dentro del array
    //los hice porque si me de el tiempo pongo una mini banderita en lo elementos a eliminar
}


    
    return(
        <div className='createActivity'onSubmit={(e)=> handleSubmit(e)}>
            <Link to='/home'><button>Back</button></Link>
            <form className= "formCreate"  >
            
            <div>
                <label>Activity Name </label>
                <input className='activityName' name='name'
                
                type="text"
                onChange={e =>handleChange(e)}
                >
                </input>
            </div>
            <div>
                <label>Duration: </label>
                <input type="number" 
                placeholder='0'
                min="0"
                max="48" 
                name='durationHr'
                onChange={e =>handleChange(e)}></input>
                <label>Hs</label>
                
                <input type="number"
                placeholder='0' 
                name='durationMin'
                min="0"
                max="60"
                onChange={e =>handleChange(e)}></input>
                <label>Min</label>
            </div>
            <div>
                <label>Countries: </label>
                <select onChange={e => handleSelect(e)}>
                    {allCountriesSort.map(c=>(
                        <option key={c.id} value={c.name +',' + c.image + ',' + c.id} >{c.name}</option>
                    ))}
                </select>
                <ul>{input.country.map(t => <div key={t} id={t}>{t[0]} <img src={t[1]} alt="not found"width="20px" height="10px" /></div>)}</ul>
            </div>
            <div>
                <label>Season: </label>
                <select onChange={e => handleSelectSeason(e)}>
                <option > Choose Season </option>
                <option value = "summer"> Summer </option>
                <option value = "winter"> Winter </option>
                <option value = "fall"> Fall </option>
                <option value = "spring"> Spring </option>
                </select>
            </div>

            <div>
                <label>Dificulty:</label>
                <p className="clasificacion" onChange={e =>handleChange(e)}>
                    <input id="radio1" type="radio" name="difficulty" value="5"/>
                    <label htmlFor="radio1">★</label>
                    <input id="radio2" type="radio" name="difficulty" value="4"/>
                    <label htmlFor="radio2">★</label>
                    <input id="radio3" type="radio" name="difficulty" value="3"/>
                    <label htmlFor="radio3">★</label>
                    <input id="radio4" type="radio" name="difficulty" value="2"/>
                    <label htmlFor="radio4">★</label>
                    <input id="radio5" type="radio" name="difficulty" value="1"/>
                    <label htmlFor="radio5">★</label>
                </p>
            </div>
                        <button>Create Activity</button>
        </form>
        {input.country.map(t =>
                <div className="divCountry"id={t[0]} key={t[0]}>
                    <p>{t[0]}</p>
                    <button className="botonX" id={t[0]} key={t[0]} onClick={(t)=>handleDelete(t)}>X</button>
                </div>
                 )}
        <button onClick={e => console.log('inputpost:', funPostActivity() )}>console.log</button>
        </div>
    )
}

//activity
//difficulty
//countries ----> ids en array
// duration 
//temporadas