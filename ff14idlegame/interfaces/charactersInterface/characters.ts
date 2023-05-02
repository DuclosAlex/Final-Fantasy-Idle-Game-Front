export interface Character {
    name: string;
    goldProduce : number;
    timeToProduce: number;
    cost: number;
}

export interface CharactersList {
    characters: Character[]
}