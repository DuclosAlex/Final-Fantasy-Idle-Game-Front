import React from 'react';
import CharacterList from '../characterList/characterList';
import { City } from '@/interfaces/cities/cities';

interface CityProps {
  city: City;
}

const CityComponent: React.FC<CityProps> = ({ city }) => {
  return (
    <div className='w-3/12 mt-5 border-gold border-4 p-6'>
      <h2 className='text-center text-3xl py-6 border-blue border-4'>{city.name}</h2>

      <CharacterList characters={city.characters}/>
    </div>
  );
};

export default CityComponent; 