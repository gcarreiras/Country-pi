const initialState = {
    country: [],
    allCountry: [],
    card: [],
    activity: []

}


function rootReducer( state = initialState , action) {
    switch (action.type){
        case 'GET_COUNTRIES':
            return {
                state,
                country: action.payload,
                allCountry: action.payload
        }

        case 'GET_CARD':
            return{
                ...state,
                card: action.payload
            }
        
        default:
            return state; 
    }

}



export default rootReducer