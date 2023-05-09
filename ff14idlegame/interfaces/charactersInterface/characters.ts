export interface Character {
    name: string;
    goldProduce : number;
    timeToProduce: number;
    cost: number;
    image : string;
    id: number;
}

export interface CharactersList {
    characters : Character[]
}
