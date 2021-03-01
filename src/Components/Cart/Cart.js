import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((totalSalary,salary) => totalSalary+salary.salary,0)
    return (
        <div className="cart">
            <h1>Total Players: {cart.length}</h1>
            <h3>Total Budget: {totalSalary}</h3>
                {
                    props.cart.map(player =>
                        <div className="addedPlayer">
                        <img src={player.image} alt=""/>
                        <p>{player.name}</p>
                        <b>Salary: ${player.salary}</b>
                        </div>
                    )
                }
        </div>
    );
};

export default Cart;