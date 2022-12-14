const initialState = {
    country: [],
    allCountry: [],
    card: [],
    act: []
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
                card: action.payload,
                act: action.payload.activities
            }

        case 'GET_COUNTRY_BY_NAME':   
        return{
                
                ...state,
                country: action.payload
                
            }
        case 'FILTER_ORDER':
                {
                    let sortArr = action.payload === 'asc' ?
                state.country.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return -1;
                    }
                    return 0;
                    }) :
                state.country.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return 1;
                    }
                    return 0;
                })
        return{
                ...state,
                country: sortArr
            }
        }
        case 'FILTER_BY_CONTINENT':
        {
                
            let byContinent =    state.allCountry
            byContinent  = byContinent.filter(e => e.continent === action.payload);
        return{
                ...state,
                country: byContinent
                }
        
        }
        case 'CREATE_ACTIVITY':
            {
                return{
                    ...state
                }
            }

        case 'GET_ACTIVITYS':
            {
                return{
                    ...state,
                    act : action.payload
                }
            }
        case 'NOT_FOUND':
            {
             alert(`Not Found : ${action.payload}`)
             return {
                ...state
             }   
            }
        case 'FILTER_BY_POPULATION':
            {
                console.log('FILTER_BY_POPULATION' , action.payload)
                console.log(state.country)
                let sortArr = action.payload === 'Min' ?
                state.country.sort(function(a, b){
                    if(a.population > b.population){
                        return 1;
                    }
                    if(b.population > a.population){
                        return -1;
                    }
                    return 0;
                    }) :
                state.country.sort(function(a,b){
                    if(a.population > b.population){
                        return -1;
                    }
                    if(b.population> a.population){
                        return 1;
                    }
                    return 0;
                })
        return{
                ...state,
                country: sortArr
            }
            }
            
        default:
                return state; 
    }

    }
        
    





export default rootReducer