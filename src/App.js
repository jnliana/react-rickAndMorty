import React, { useEffect, useState } from "react";
import API from "./api";

import "./App.css";

import Character from "./character/components/Character";
import CharacterDescription from "./character/components/Character-description";
import CharacterImage from "./character/components/Character-image";
import CharacterName from "./character/components/Character-name";
import CharacterPlaceholder from "./character/components/Character-placeholder";

const api = new API();

function App() {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function sendRequest() {
      const responseData = await api.getCharacter(1);
      setCharacter(responseData);
      console.log(responseData);
    }
    sendRequest();
  }, []);

  return (
    <div className="App">
      {/* <Character></Character> */}
      <CharacterPlaceholder name={character.name} />

      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img
          className="logo"
          src="./static/images/logo@2x.png"
          width="280"
          alt=""
        />
        <div className="social">
          <a href="https://instagram.com/LeonidasEsteban">
            <img src="./static/images/instagram.svg" alt="" />
          </a>
          <a href="https://facebook.com/LeonidasEsteban">
            <img src="./static/images/facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/LeonidasEsteban">
            <img src="./static/images/twitter.svg" alt="" />
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>

        <CharacterName name={character.name} />
        <CharacterImage name={character.name} image={character.image} />

        <div className="navigation about">
          <a href="#">About</a>
        </div>
        <CharacterDescription
          status={character.status}
          gender={character.gender}
          species={character.species}
        />

        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>

        <div className="arrow" id="load-next"></div>
      </div>
    </div>
  );
}

export default App;
