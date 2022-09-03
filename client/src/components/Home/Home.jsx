import {React} from 'react';
import {useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {getCountries , filterOrder , filterContinent } from '../../actions';
import {Link} from 'react-router-dom';
import Cards  from '../Cards/Cards'
import Paginado from '../Paginado/Paginado'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'

export default function Home (){

const dispatch = useDispatch();

const allCountries = useSelector(state => state.country);

const [order, setOrder] = useState("")  //bueno... vacio
const [currentPage, setCurrentPage] = useState(1); // aca empezamos de la pagina 1
const [countryInPage, setCountryInPage] = useState(10); // cuantos por pagina voy a mostrar
const indexOfLastCountry = currentPage * countryInPage; // esto me va a mostrar el ultimo pais de la pagina
// ejemplo mas facil... estoy en la pagina 2... hago 2 * 8(los paises que muestro)
// me da el numero 16 que es el ultimo pais de esa pagina
const indexOfFirstCountry = indexOfLastCountry - countryInPage;
//lo mismo pero al revez .... ya tengo el inidice del ultimo... con el mismo ejemplo 16 - 8 .. me da el primerooooooooo
let currentCountry;
if (currentPage === 1) {
  currentCountry = allCountries.slice(indexOfFirstCountry,indexOfLastCountry - 1)  
}else{
  currentCountry = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
}

//aca de todoooos, los voy a cortar por el primero y el ultimo... osea.. los 8 que quiero mostrar

const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

useEffect( ()=> {
    dispatch(getCountries())
}, [dispatch] )

function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
    setCurrentPage(1);
}

function handleFilterOrder(e) {
  e.preventDefault(); 
  if (e.target.value === 'Sort by letter') handleClick(e)
  else{
    dispatch(filterOrder(e.target.value));
    setCurrentPage(1); // y claro con razon no me andaba, con esto lo seteo
    setOrder(`Ordenado ${e.target.value}`);
  } 
}

function handleFilterContinent (e){
  e.preventDefault();
  if (e.target.value === 'Order by Continent') handleClick(e)
  else{

    dispatch(filterContinent(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
}


return(

    <div className='homediv'>
        
        <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload all country
      </button>
      <Link to= '/activity'>
        <button>Create Activity</button>
      </Link>
      <select onChange={(e) => handleFilterOrder(e)}>
            <option value="Sort by letter"> Sort by letter </option>
            <option value="asc"> A-Z </option>
            <option value="desc"> Z-A </option>
      </select>
      <select onChange={(e) => handleFilterContinent(e)}>
            <option value="Order by Continent"> Order by Continent </option>
            <option value="Asia"> Asia </option>
            <option value="Oceania"> Oceania </option>
            <option value="South America"> South America </option>
            <option value="North America"> North America </option>
            <option value="Europe"> Europe </option>
            <option value="Africa"> Africa </option>
            
      </select>


        <SearchBar> </SearchBar>
        <Paginado
        
        countryInPage={countryInPage}
        allCountries={allCountries}
        paginado= {paginado}
        />  
       

        {currentCountry?.map((e) => {
            return(
                <div key={e.id}>
                    <Link to= {'/Card/'+ e.id}>
                        <Cards name={e.name} image={e.image} continent={e.continent} />
                    </Link>
                </div>
           ) })}
        

    </div>
)


}