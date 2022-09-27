import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import Players from "../Players/Players";
import "./Home.css";
const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);

  console.log(cart);
  const handleDelet = (id) => {
    const leftPlayer = cart.filter((p) => p.id !== id);
    setCart(leftPlayer);
    toast("Wow Deleted From Cart");
    Swal.fire("Good job!", "You clicked the button!", "success");
  };

  return (
    <div className="home-container">
      <div className="left-side">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          type="text"
        />
        <button className="search-btn">Search</button>
        <div className="players-container">
          <Players players={players} cart={cart} setCart={setCart}></Players>
        </div>
      </div>
      <div className="right-side">
        <div className="cart">
          <p>This is players Cart</p>

          {cart?.map((p, index) => (
            <div className="cart-info-container" key={index}>
              <li>{p.name}</li>
              <button onClick={() => handleDelet(p.id)} className="delet-btn">
                X
              </button>
              <ToastContainer></ToastContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
