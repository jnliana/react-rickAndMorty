import React from "react";
import styled from "styled-components";

const NavigationItemStyled = styled.a`
  text-decoration: none;
  color: black;
  font-size: 25px;
  text-transform: uppercase;
`;

const NavigationItem = ({ url, children }) => {
  return <NavigationItemStyled href={url}>{children}</NavigationItemStyled>;
};
export default NavigationItem;
