import CityComponent from '../cityComponent/cityComponent';
import { useEffect, useState} from 'react';
import { Character, CharactersList } from "@/interfaces/charactersInterface/characters"


export const GameObject:React.FC = () => {

    // const user = localStorage.getItem("user");

    // useEffect(() => {
        
    //     console.log(user);
    // },[user]);

    
    return (
        <div className='flex justify-around'>
            
            {cities.map((city: CharactersList) => (
              <CityComponent city={city} />
            ))}
    </div>
    )
}