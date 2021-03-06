import React from 'react';
import './Die.css';
import './GameBoard.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { faDiceThree } from '@fortawesome/free-solid-svg-icons';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';

library.add(faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix);

const Dice = ({ rolling, dieFaces, numberOfDie }) => {
    return (
        <div>
            {dieFaces.map((face) => {
                return <FontAwesomeIcon className={`die ${rolling && "rolling"}`} icon={`${face}`} size="10x"/>
            })}
        </div>
    )
}

export default Dice
