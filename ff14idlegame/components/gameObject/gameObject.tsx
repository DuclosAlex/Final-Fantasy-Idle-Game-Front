import CityComponent from '../cityComponent/cityComponent';
import { useEffect, useState} from 'react';
import { City, Cities } from '@/interfaces/cities/cities';


export const GameObject:React.FC = () => {

    const [data, setData] = useState<Cities>({
        cities: [
            {
                "name" : "Gridannia",
                "id" : 1,
                "characters" : [
                    { "name" : "Kan-E-Semma", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Kan-e-sema.jpg", "id" : 1},
                    { "name" : "Beatin", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Beatin.jpg", "id" : 2},
                    { "name" : "Ywain", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Ywain.jpg",  "id" : 3}
                ]
            },
            {
                "name" : "Limsa Liminsa",
                "id" : 2,
                "characters" : [
                    { "name" : "Merlwyb Bloefhiswyn", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Merlwyb.jpg", "id" : 1},
                    { "name" : "Jacke", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Jacke.jpg", "id" : 2},
                    { "name" : "Wyrnzoen", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Wyrzoen.jpg",  "id" : 3}
                ]
            },
            {
                "name" : "Ul'dah",
                "id" : 3,
                "characters" : [
                    { "name" : "Nanamo Ul Namo", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Raubahn.jpg", "id" : 1},
                    { "name" : "Raubahn Aldynn", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Nanamo.jpg", "id" : 2},
                    { "name" : "Mylla", "goldProduce" : 50, "timeToProduce" : 2, "cost" : 20, "image" : "/assets/Mylla.jpg", "id" : 3}
                ]
            }
        ]
    });

    
    return (
        <div className='flex justify-around'>
            
            {data.cities.map((city: City) => (
              <CityComponent city={city} />
            ))}
    </div>
    )
} 