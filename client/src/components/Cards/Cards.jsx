import React  from 'react';
import './Cards.css';

export default function CountryCards ({image , name, continent}) {
return (
    <div>
        <h3>{name}</h3>
        <img src={image} alt='image not found'/>
        <h4>{continent}</h4>
    </div>
)
} 