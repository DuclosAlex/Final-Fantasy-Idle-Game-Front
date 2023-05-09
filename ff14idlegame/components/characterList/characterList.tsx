import { Character, CharactersList } from "@/interfaces/charactersInterface/characters";
import CharacterBox from "../characterBox/characterBox";

const CharacterList: React.FC<CharactersList> = ({characters}) => {

    return ( 
        <ul>
            {characters.map((character: Character) => {
                return (
                    <li key={character.id} className="h-96 bg-green p-2 m-4">
                        <CharacterBox {...character} />
                    </li>
                )
            })}
        </ul>

    )
}

export default CharacterList;