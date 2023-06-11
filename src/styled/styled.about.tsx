import styled from "styled-components";
import "./Fonts.css";

export const Aboutcontainer = styled.div`
  width: 100%;
  
  display: grid;
  place-items: center;
  font-family: regular;
`;
export const Aboutbox = styled.div`
  width: 95%;
  height: 50rem;

  display: flex;
  flex-direction: column;
  gap: 4%;

  @media (max-width: 768px) {
    height: 70rem;
    margin-top: 80px;
    margin-bottom: 50px;
  }
`;
export const Aboutfloor = styled.div`
  width: 100%;
  height: 48%;

  display: flex;
  gap: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Aboutcontent = styled.div`
  width: 45%;
  height: 90%;
  font-size: 0.85em;
  display: flex;

  justify-content: center;
  flex-direction: column;
  span:first-of-type {
    color: red;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Aboutimgbox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Aboutimg = styled.img`
  width: 80%;
  height: 95%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
