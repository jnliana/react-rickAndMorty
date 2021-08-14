import React from "react";
import styled from "styled-components";

const CharacterImageStyled = styled.div`
  grid-area: avatar;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
  }
`;

const CharacterImage = ({ name, image }) => {
  return (
    <CharacterImageStyled>
      <img className="character-image" src={image} alt={name}></img>
    </CharacterImageStyled>
  );
};

export default CharacterImage;
