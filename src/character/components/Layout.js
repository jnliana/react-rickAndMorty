import React from "react";
import styled from "styled-components";

import Social from "../components/Social";
import Dot from "../UIElements/Dot";
import LearnMore from "./Learn-more";
import Line from "../UIElements/Line";
import Logo from "./logo";
import NavigationItem from "./Navigation-item";

const LayoutStyled = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  height: calc(100vh - 8em);
  padding: 4em;
  grid-column-gap: 8em;
  grid-template-columns: 50px 1fr 1fr 200px;
  grid-template-rows: 230px 100px 1fr 1fr 1fr;
  grid-template-areas: "asset-top logo logo social" "name character-name avatar avatar" "about character-description avatar avatar" "asset-bottom character-text avatar avatar" "asset-bottom learn-more arrow other-line";

  .name-area {
    display: flex;
    align-items: center;
    grid-area: character-name;
  }
  .image-area {
    grid-area: avatar;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description-area {
    grid-area: character-description;
  }
  .next-area {
    grid-area: arrow;
  }
  .social-area {
    grid-area: social;
  }
  .logo-area {
    grid-area: logo;
  }
  .learn-more-area {
    grid-area: learn-more;
    /* border: 1px solid red; */
  }
  .vertical {
    writing-mode: vertical-rl;
    display: flex;
    align-items: center;
  }
  .asset-top-area {
    grid-area: asset-top;
    /* border: 1px solid red; */
  }

  .asset-bottom-area {
    grid-area: asset-bottom;
    /* border: 1px solid green; */
    justify-content: flex-end;
  }
  .navigation-area {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    &.name {
      grid-area: name;
      /* border: 1px solid purple; */
    }
    &.about {
      grid-area: about;
      /* border: 1px solid purple; */
    }
  }

  @media screen and (max-width: 1024px) {
    height: auto;
    padding: 2em 0;
    width: calc(100vw - 2em);
    margin: 0 auto;
    column-gap: 1em;
    grid-template-columns: 50px 1fr 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: "logo logo logo" "name avatar avatar" "name character-name character-name" "about character-description character-description" "arrow arrow arrow" "social social social";

    .name-area {
      margin-top: 1em;
      justify-content: center;
    }
    .social-area {
      text-align: center;
      mergin-top: 2em;
    }
    .vertical {
      display: none;
    }
  }

  @media screen and (max-width: 1440px) {
    column-gap: 2em;
  }
`;

const Layout = ({ name, image, description, next }) => {
  return (
    <LayoutStyled>
      <span className="vertical asset-top-area">
        <Dot />
        <Dot />
        <Dot />
        <Line />
      </span>
      <div className="logo-area">
        <Logo />
      </div>

      <div className="social-area">
        <Social />
      </div>
      <div className="navigation-area name">
        <NavigationItem url="#" label="Name" />
      </div>
      {/* existe props.children, no se puso usar porque no van juntos */}
      {/*  asi paso los render props */}
      <div className="name-area">{name}</div>
      <div className="image-area">{image}</div>

      <div className="navigation-area about">
        <NavigationItem url="#" label="About" />
      </div>
      <div className="description-area"> {description}</div>
      <span className="vertical asset-bottom-area">
        <Line />
        <Dot />
        <Dot />
        <Dot />
      </span>

      <div className="learn-more-area">
        <LearnMore />
      </div>
      <div className="next-area">{next}</div>
    </LayoutStyled>
  );
};

export default Layout;
