import { Character } from "../charactersInterface/characters";

export interface City {
    id: number;
    name: string;
    characters: Character[];
}

export interface Cities {
    cities : City[];
}