import  axios  from 'axios';

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
            console.log(response)
            return dispatch({
                type : 'GET_CARD',
                payload: response.data
            })
        }catch(error){
            console.log(error)
        }
    }
};

// export function getActivity(id)
//     return async function (dispatch)
