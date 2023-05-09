import { Character } from "@/interfaces/charactersInterface/characters"
import Image from "next/image";
import styles from "./CharacterBox.module.css";
import { motion } from "framer-motion";
import { useState } from "react";


const CharacterBox: React.FC<Character> = (character) => {

    const [imageClicked, setImageClicked] = useState(false);
    const [ isAnimated, setIsAnimated] = useState(false)


    return(
        <div className="flex mt-4 mb-4 h-5/6">
            <div className="w-1/2 relative">

                <Image 
                src={character.image}
                alt="some image"
                className="rounded object-cover"
                fill
                />
            </div>
            <div className="flex flex-col w-1/2">
                <h2 className="text-center text-2xl mb-8">{character.name}</h2>

                <div className={styles.progressBarContainer}>
                    <div className={isAnimated ? styles.progressBar : ""}>
                        {imageClicked && <motion.div 
                            className={styles.bar}
                            animate={
                                {width: "100%"}
                            }
                            transition={{
                                duration : 2
                            }}
                        ></motion.div>}
                    </div>
                </div>

                <div className="flex">
                    <button onClick={() => setImageClicked(true)} className="btn text-2xl">Level Up : {character.cost}</button>
                </div>
            </div>
        </div>
    )
}

export default CharacterBox;