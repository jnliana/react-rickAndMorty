import React from "react";
import styled from "styled-components";

const NavigationItemStyled = styled.a`
  text-decoration: none;
  color: black;
  font-size: 25px;
  text-transform: uppercase;
`;

const NavigationItem = ({ url, label }) => {
  return <NavigationItemStyled href={url}>{label}</NavigationItemStyled>;
};
export default NavigationItem;
