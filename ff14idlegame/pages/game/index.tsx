import { NextPage } from "next"


const GameScreen: NextPage = () => {

    const user: string = "Alex";


    return (
        <div>
            <h1 className="text-center text-6xl border-blue border-8 py-8 "> Bienvenue {user}</h1>
        </div>
    )
}

export default GameScreen;