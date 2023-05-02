import { NextPage } from "next";
import { GameObject } from "@/components/gameObject/gameObject";

interface User {
    id: number;
    nickname: string;
    role: string;
    email: string;
  }

const GameScreen: NextPage = () => {

    const username: string = "Alex";

    return (
        <div>

            <h1 className="text-center text-6xl border-blue border-8 py-8 "> Bienvenue {username}</h1>
            <GameObject />
        </div>
    )
}

export default GameScreen;