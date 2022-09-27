import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./Home.css";
const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);
  console.log(players);

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
          <Players></Players>
        </div>
      </div>
      <div className="right-side">
        <div className="cart">
          <p>This is player Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
