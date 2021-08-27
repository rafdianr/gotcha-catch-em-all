import React from "react";
import styled from "@emotion/styled";

const DisplayPokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
`;

const DisplayPokemonContent = styled.div`
  height: 100%;
  border-radius: 5px;
  border-bottom: 1px solid #e3350d;
`;

const DisplayPokemonInner = styled.div`
  height: 100%;
  background-color: #222629;
  border-radius: 5px;
  background-image: linear-gradient(rgba(179, 42, 10, 0.4) 1px, transparent 1px),
    linear-gradient(to right, rgba(179, 42, 10, 0.4) 1px, transparent 1px);
  background-size: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DisplayPokemonTitle = styled.h4`
  widht: 100%;
  margin: 0;
  background-color: #e3350d;
  text-align: center;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const DisplayPokemonImage = styled.div`
  widht: 100%;
  height: calc(100% - 100px);
  margin: 5px 0;
  text-align: center;
  & > img {
    width: auto;
    height: 100%;
  }
`;

const DisplayPokemonType = styled.div`
  padding: 5px 0 10px 0;
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const DisplayPokemonTypeItem = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  padding: 5px 15px;
  margin: 0 5px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  letter-spacing: 1.2px;
  font-size: 8px;
  background: blue;
  border-radius: 20px;
  border: 1px solid;

  @media screen and (min-width: 325px) {
    font-size: 10px;
  }

  @media screen and (min-width: 720px) {
    font-size: 12px;
  }
`;

const DisplayPokemon = () => {
  return (
    <DisplayPokemonWrapper>
      <DisplayPokemonContent>
        <DisplayPokemonInner>
          <DisplayPokemonTitle>{"name"}</DisplayPokemonTitle>
          <DisplayPokemonImage>
            <img
              src={
                "https://img.pokemondb.net/sprites/x-y/normal/blaziken-f.png"
              }
              alt={"name"}
            />
          </DisplayPokemonImage>
          <DisplayPokemonType>
            <DisplayPokemonTypeItem>asd</DisplayPokemonTypeItem>
            <DisplayPokemonTypeItem>asd</DisplayPokemonTypeItem>
          </DisplayPokemonType>
        </DisplayPokemonInner>
      </DisplayPokemonContent>
    </DisplayPokemonWrapper>
  );
};

export default DisplayPokemon;
