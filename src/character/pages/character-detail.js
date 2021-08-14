import React from "react";

//import Character from "../components/Character";
import CharacterDescription from "../components/Character-description";
import CharacterImage from "../components/Character-image";
import CharacterName from "../components/Character-name";
import CharacterPlaceholder from "../components/Character-placeholder";

import Next from "../components/Next";
import Layout from "../components/Layout";

const CharacterDetail = (props) => {
  return (
    <React.Fragment>
      {/* <Character></Character> */}
      <CharacterPlaceholder name={props.character.name} />
      {/*  Render props  name={CharacterName} */}
      <Layout
        next={<Next />}
        name={<CharacterName name={props.character.name} />}
        image={
          <CharacterImage
            name={props.character.name}
            image={props.character.image}
          />
        }
        description={
          <CharacterDescription
            status={props.character.status}
            gender={props.character.gender}
            species={props.character.species}
          />
        }
      />
    </React.Fragment>
  );
};

export default CharacterDetail;
