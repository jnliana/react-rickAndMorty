import React from "react";
import styled from "styled-components";

const CharacterDescriptionStyled = styled.div`
  .character-label {
    background: #685128;
    padding: 1em;
    color: white;
    border-radius: 10px;
    text-align: left;
    font-size: 25px;
    font-weight: 400;
    /* display: inline-flex; */
  }
`;

const CharacterDescription = ({ status, gender, species }) => {
  return (
    <CharacterDescriptionStyled>
      <div className="character-labels">
        <h3 className="character-label">Género: {gender}</h3>
        <h3 className="character-label">Especie: {species}</h3>
        <h3 className="character-label">Status: {status}</h3>
      </div>
    </CharacterDescriptionStyled>
  );
};

export default CharacterDescription;
