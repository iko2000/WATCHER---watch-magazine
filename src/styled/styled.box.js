import styled from "styled-components";
import "./Fonts.css";

export const Container = styled.div`
  width: 200px;
  height: 230px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  align-items: center;
  margin: 8px;
  border: 1px solid black;
`;
export const Imgbox = styled.div`
  width: 90%;
  height: 70%;

  display: grid;
  place-items: center;
  transition: 2s;
  &:hover {
    scale: 1.1;
  }
`;
export const Textbox = styled.div`
  width: 90%;
  height: 20%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const P = styled.p`
  font-size: 0.9em;
`;
export const Pdecorated = styled.p`
  font-size: 1em;
  font-weight: bold;
`;
export const Btn = styled.button`
  width: 50%;
  height: 25px;
  border: none;
  border-radius: 10px;
  background-color: rgb(216, 125, 74);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
  font-family: regular;

  &:hover {
    color: blue;
    scale: 1.1;
  }
`;
export const Img = styled.img`
  width: 80%;
  height: 80%;
`;

export const Category = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1em;
  font-weight: bold;
  transition: 2s;
  font-family: regular;

  &:hover {
    opacity: 1;
    scale: 1.1;
  }
`;
