import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css'

const Players = (props) => {
    const { name, image, salary } = props.player;
    return (
        <div className="player">
            <img src={image} alt="" />
            <h4>{name}</h4>
            <h6>Salary: ${salary}</h6>
            <button onClick={() => props.handleClick(props.player)}><FontAwesomeIcon icon={faPlus} /> add player</button>
        </div>
    );
};

export default Players;