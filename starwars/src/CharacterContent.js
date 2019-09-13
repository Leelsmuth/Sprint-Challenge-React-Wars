import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CharacterContent = props => {
  return (
    <ContentDiv>
      <h4> {`Name: ${props.name}`} </h4>
      <h4> {`Height: ${props.height}`}</h4>
      <h4> {`Mass: ${props.mass}`} </h4>
      <h4> {`Haircolor: ${props.hairColor}`} </h4>
      <h4> {`Skincolor: ${props.skinColor}`} </h4>
    </ContentDiv>
  );
};

export default CharacterContent;
