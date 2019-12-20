import React, { useState } from 'react'
import './GameBoard.css'
import Dice from './Dice.js'
import {FaMinusSquare, FaPlusSquare} from 'react-icons/fa';

const Gameboard = () => {
    
    const sides = ["dice-one","dice-two", "dice-three", "dice-four", "dice-five", "dice-six"];
    const [total, setTotal] = useState(3);
    const [dieFaces, setDieFaces] = useState(['dice-one', 'dice-two']);
    const [rolling, setRolling] = useState(false);

    const toRollorNotToRollThatIsTheQuestion = rolling ? "Rolling..." : "Roll Dice!";

    const rollDie = () => {
        setRolling(true);
        const randomFaces = [];
        dieFaces.forEach((index) => {
            const randomIndex = (Math.floor(Math.random(100) * 6))
            randomFaces.push(sides[randomIndex])
        })
        
        
        setTimeout(() => {
            setTotal(() => randomFaces.reduce((total, sum) => total + sum))
            setDieFaces(randomFaces)
            setRolling(false);
        }, 1000);
    }

    const addDie = () => {
        if(dieFaces.length < 8 ) {
            setDieFaces(dieFaces => [...dieFaces, "dice-one"])
        }

    };

    const removeDie = () => {
        if(dieFaces.length > 1) {
            dieFaces.splice(0,1)
            setDieFaces([...dieFaces])
        }
        
    };

    return (
        <div className="Board">
            <div className="Dice-Container">
                <Dice dieFaces={dieFaces} rolling={rolling}/>
            </div>
            <div className="button-container">
                <div id="antiflicker">
                    <button className={rolling ? "disabled-button" : "add-subtract-button"} onClick={removeDie} disabled={rolling}><FaMinusSquare size={50}/></button>
                </div>
                <div id="antiflicker">
                    <button className={rolling ? "disabled-button" : "roll-button"} onClick={rollDie} disabled={rolling}>{toRollorNotToRollThatIsTheQuestion}</button>
                </div>
                <div id="antiflicker">
                    <button className={rolling ? "disabled-button" : "add-subtract-button"} onClick={addDie} disabled={rolling}><FaPlusSquare size={50} /></button>
                </div>
            </div>
            
        </div>
    )
}

export default Gameboard
