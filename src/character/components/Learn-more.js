import React from "react";
import styled from "styled-components";

import learnMore from "../../assets/images/learn-more.svg";

const LearnMoreStyled = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 25px;
  text-transform: uppercase;
  background-image: url(${learnMore});
  background-repeat: no-repeat;
  background-position: left 170px bottom 5px;

  @media screen and (max-width: 1024px) {
    display: none;
    /* padding-inline-start: 1em; */
  }
`;

const LearnMore = () => {
  return <LearnMoreStyled>Learn More</LearnMoreStyled>;
};
export default LearnMore;
