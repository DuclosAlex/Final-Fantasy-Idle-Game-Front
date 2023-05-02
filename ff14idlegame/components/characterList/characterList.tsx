import { Character, CharactersList } from "@/interfaces/charactersInterface/characters"

const CharacterList: React.FC<CharactersList> = ({characters}) => {

    return ( 
        <ul>
            {characters.map((character) => {
                return (
                    <li>
                        {character.name}
                    </li>
                )
            })}
        </ul>

    )
}

export default CharacterList;