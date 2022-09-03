import  axios  from 'axios';
import CreateActivity from './../components/CreateActivity/CreateActivity';

export function getCountries () {
    return async function (dispatch){
        const json = await axios.get('http://localhost:3001/country')
        return dispatch({
            type : 'GET_COUNTRIES',
            payload: json.data
        })
    }
};

export function getCard (id){
    return async function (dispatch){
        try{
            const response = await axios.get('http://localhost:3001/country/'+id)
            return dispatch({
                type : 'GET_CARD',
                payload: response.data
            })
        }catch(error){
            console.log(error)
        }
    }
};

export function getCountryByName(name){
    
    return async function (dispatch){
        
            const response = await axios.get(`http://localhost:3001/countryName?name=${name}`)
            
            return dispatch({
                type: 'GET_COUNTRY_BY_NAME',
                payload: response.data
            })
       
}
};

export function filterOrder(payload){
    return{
        type: 'FILTER_ORDER',
        payload
    }
};

export function filterContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
};

export function createActivity (payload){
    return async function (dispatch){
        try{

            const  response = await axios.post('http://localhost:3001/activity' ,payload)
            return{
                type:'CREATE_ACTIVITY',
                payload : response
            }
        }catch(error){
            console.log(error)
        }

    }
}


