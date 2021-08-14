import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NoFoundStyled = styled.div`
  display: flex;
  flex-flow: wrap;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .btn {
    border: 1px solid white;
    background-color: white;
    color: #00a5be;
    padding: 15px;
    margin-left: 30px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const noFound = () => {
  return (
    <NoFoundStyled>
      <p>Page no found</p>
      <Link className="btn" to="/1">
        Go to home
      </Link>
    </NoFoundStyled>
  );
};

export default noFound;
