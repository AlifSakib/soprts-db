import React from "react";
import "./Player.css";
const Player = ({ player, cart, setCart }) => {
  const { strPlayer: name, idPlayer: id, strCutout } = player;

  const handleAddToCart = () => {
    const info = {
      name,
      id,
      strCutout,
      Price: 115,
    };
    if (cart) {
      setCart([...cart, info]);
      return;
    } else {
      setCart([info]);
      return;
    }
  };

  const handleBookmark = () => {
    const info = {
      name,
      id,
      strCutout,
      Price: 115,
      bookmark: "true",
    };

    const previousBookmark = localStorage.getItem("bookmark");
    const oldBookmark = JSON.parse(previousBookmark);
    if (oldBookmark) {
      const isExist = oldBookmark.find((p) => p.id === id);
      if (isExist) {
        alert("Alrady bookmarked");
        return;
      } else {
        localStorage.setItem(
          "bookmark",
          JSON.stringify([...oldBookmark, info])
        );
      }
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
      console.log("nai");
    }
  };

  return (
    <div className="player" data-aos="zoom-in">
      <img src={strCutout} alt="" />
      <h6>{name}</h6>
      <p>{id}</p>
      <button className=" card-btn">Details</button>
      <button className=" card-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button className=" card-btn" onClick={handleBookmark}>
        Bookmark
      </button>
    </div>
  );
};

export default Player;
