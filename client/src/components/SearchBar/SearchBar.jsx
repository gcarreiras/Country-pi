import React  from 'react';
import { useState } from 'react';
import{ useDispatch}  from 'react-redux';
import { getCountryByName } from '../../actions'

export default function SearchBar(){
    
    const [name , setName] = useState("")
   
    const dispatch = useDispatch();

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(getCountryByName(name))
    }

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }


    return(
      <div>
            
            <input 
            type="text"
            placeholder="Search....Country"
            onChange={(e) =>handleInputChange(e)}
            />
            <button type="submit" 
            onClick={(e)=>handleSubmit(e)} 
            >Search</button>
      </div>  
    )
}