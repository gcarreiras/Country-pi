import React  from 'react';
import {Link} from 'react-router-dom'
import './LandingPage.css'


export default function LandingPage(){

    return(
        <div>
            <h1>Welcome to Henry Countries App</h1>
            <Link to='/home'>
                <button className='btnEnter'>Enter</button>
            </Link>
        </div>
    )
} 