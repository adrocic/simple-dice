import React, { useState } from 'react'
import './GameBoard.css'
import Dice from './Dice.js'

const Gameboard = () => {
    
    const [sides] = useState(["dice-one","dice-two", "dice-three", "dice-four", "dice-five", "dice-six"]);
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(1);
    const[total, setTotal] = useState(3);
    const [die1, setDie1] = useState("dice-one");
    const [die2, setDie2] = useState("dice-two");
    const [rolling, setRolling] = useState(false);

    const toRollorNotToRollThatIsTheQuestion = rolling ? "Rolling..." : "Roll Dice!";

    const roll = () => {
        setIndex1(Math.floor(Math.random(100) * 6));
        setIndex2(Math.floor(Math.random(100) * 6));
        const newDie1 = sides[index1];
        const newDie2 = sides[index2];
        setRolling(true);
        
        setTimeout(() => {
            setDie1(newDie1);
            setDie2(newDie2);
            setRolling(false);
            setTotal(index1 + index2 + 2)
        }, 1000);
    }

    return (
        <div className="Board">
            <div className="Dice-Container">
                <Dice face={die1} rolling={rolling}/>
                <Dice face={die2} rolling={rolling}/>
                <p>{total}</p>
            </div>
            <div className="roll-button" id="antiflicker">
                <button onClick={roll} disabled={rolling}>{toRollorNotToRollThatIsTheQuestion}</button>
            </div>
        </div>
    )
}

export default Gameboard
