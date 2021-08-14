import React, { useContext } from "react";
import styled from "styled-components";
import CharacterContext from "../../character-context";
import NProgress from "nprogress";

import arrow from "../../assets/images/arrow.svg";

import api from "../../api";

const NextStyled = styled.div`
  cursor: pointer;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: left bottom;
  min-height: 50px;
  @media screen and (max-width: 1024px) {
    user-select: none;
    background-position: center;
  }
`;

const Next = () => {
  /*   para consumir un pedazo del contexto como es el valor */
  const context = useContext(CharacterContext);

  async function clickHandler() {
    NProgress.start();
    const responseData = await api.getCharacter(context.character.id + 1);
    context.setCharacter(responseData);
    NProgress.done();
  }
  return (
    <NextStyled onClick={clickHandler}>
      <div className="arrow" id="load-next"></div>
    </NextStyled>
  );
};

export default Next;
