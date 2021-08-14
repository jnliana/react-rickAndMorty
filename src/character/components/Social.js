import React from "react";
import styled from "styled-components";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const SocialStyled = styled.div`
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    a {
      margin-left: 2em;
    }
    a:first-child {
      margin-left: 0;
    }
  }
`;

const Social = () => {
  return (
    <SocialStyled>
      <a href="https://instagram.com/LeonidasEsteban">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://facebook.com/LeonidasEsteban">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://twitter.com/LeonidasEsteban">
        <img src={twitter} alt="twitter" />
      </a>
    </SocialStyled>
  );
};
export default Social;
