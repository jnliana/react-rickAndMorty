import React, { useEffect, useState } from "react";
import api from "./api";
import CharacterContext from "./character-context";

import "./nprogress.css";

import Globalstyle from "./global-styles";

import CharacterDetail from "./character/pages/character-detail";

function App() {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function sendRequest() {
      const responseData = await api.getCharacter(1);
      setCharacter(responseData);
    }
    sendRequest();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        character,
        setCharacter,
      }}
    >
      <Globalstyle />
      <CharacterDetail character={character} />
    </CharacterContext.Provider>
  );
}

export default App;
