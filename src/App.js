import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import playersData from './data/Players.json';
import Players from './Components/Players/Players';
import Cart from './Components/Cart/Cart';

function App() {

  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playersData);
  }, [])

  const [cart, setCart] = useState([])
  const handleClick = (addedPlayer) => {
    const newCart = [...cart, addedPlayer];
    setCart(newCart);
  }
  return (
    <div className="main-container">
      <div className="player-container">
        {
          player.map(player => <Players player={player} handleClick={handleClick}></Players>)
        }
      </div>
      <div className="cart-container">
        <Cart cart = {cart}></Cart>
      </div>

    </div>
  );
}

export default App;
