import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import playersData from './data/Players.json';
import Players from './Components/Players/Players';
import Cart from './Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div>
      <h1 className="text-center bg-primary text-light">Make Your Team</h1>
      <div className="d-flex">
      <div className="player-container container">
        {
          player.map(player => <Players player={player} handleClick={handleClick}></Players>)
        }
      </div>
      <div className="cart-container shadow">
        <Cart cart = {cart}></Cart>
      </div>

    </div>
    </div>
  );
}

export default App;
