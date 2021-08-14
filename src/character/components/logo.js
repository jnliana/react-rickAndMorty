import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/logo@2x.png";

const LogoStyled = styled.img`
  margin: 0 auto 2em;
  display: block;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Logo = () => {
  return <LogoStyled src={logo} width="280" alt="logo rick and morty" />;
};
export default Logo;
