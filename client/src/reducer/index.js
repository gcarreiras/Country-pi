const initialState = {
    country : [],
    allCountry: []

}


function rootReducer( state = initialState , action) {
    switch (action.type){
        case 'GET_COUNTRIES':
            return {
                state,
                country: action.payload,
                allCountry: action.payload
        }
        
        default:
            return state; 
    }

}



export default rootReducer