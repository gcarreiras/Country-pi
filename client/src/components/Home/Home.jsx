import {react} from 'react';
import { useEffect , useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {getCountries} from '../../actions';
import {Link} from 'react-router-dom';
import Cards  from '../Cards/Cards'
import Paginado from '../Paginado/Paginado'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'

export default function Home (){

const dispatch = useDispatch();

const allCountries = useSelector(state => state.country);

useEffect( ()=> {
    dispatch(getCountries())
}, [dispatch] )


return(

    <div className='homediv'>
        


        {allCountries?.map((e) => {
            return(
                <div key={e.id}>
                    <Link to= {'/Card/'+ e.id}>
                        <Cards name={e.name} image={e.image} continent={e.continent} />
                    </Link>
                </div>
           )
        } ) 
        }
    </div>
)


}