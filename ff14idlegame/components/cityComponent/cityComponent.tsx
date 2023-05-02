import React from 'react';
import CharacterList from '../characterList/characterList';
import { Character, CharactersList } from '@/interfaces/charactersInterface/characters';

interface City {
  id: number;
  name: string;
  characters: Character[];
}

interface CityTitleProps {
  city: City;
}

const CityComponent: React.FC<CityTitleProps> = ({ city }) => {
  return (
    <div className='w-1/4 mt-5 border-gold border-4 p-6'>
      <h2 className='text-center text-3xl py-6 border-blue border-4'>{city.name}</h2>

      <CharacterList characters={city.characters}/>
    </div>
  );
};

export default CityComponent;