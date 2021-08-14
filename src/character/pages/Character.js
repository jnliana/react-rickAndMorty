import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import CharacterDescription from "../components/Character-description";
import CharacterImage from "../components/Character-image";
import CharacterName from "../components/Character-name";
import CharacterPlaceholder from "../components/Character-placeholder";
import Next from "../components/Next";
import Layout from "../components/Layout";

import CharacterContext from "../../character-context";

import api from "../../api";

const Character = ({ match }) => {
  const [noFound, setNoFound] = useState();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const responseData = await api.getCharacter(match.params.id || 10);
        if (responseData.error) {
          setNoFound(responseData.error);
        } else {
          setCharacter(responseData);
        }
      } catch (error) {
        console.log("catch", error);
      }
    };
    sendRequest();
  }, [match.params.id]);
  return (
    <CharacterContext.Provider
      value={{
        character,
        setCharacter,
      }}
    >
      {noFound && <Redirect to="/noFound/404" />}
      <CharacterPlaceholder name={character.name} />
      {/*  Render props  name={CharacterName} */}
      <Layout
        next={<Next />}
        name={<CharacterName name={character.name} />}
        image={<CharacterImage name={character.name} image={character.image} />}
        description={
          <CharacterDescription
            status={character.status}
            gender={character.gender}
            species={character.species}
          />
        }
      />
    </CharacterContext.Provider>
  );
};

export default Character;
