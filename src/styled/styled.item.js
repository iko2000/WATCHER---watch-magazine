import styled from "styled-components";
import "./Fonts.css";

export const Itemcontainer = styled.div`
  width: 100%;
`;

export const Itembox = styled.div`
    display: flex;
    width:90%
    justify-content: center;

    font-family: numero;
    @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }


`;
export const Itemimgbox = styled.div`
  width: 50%;
  height: 30rem;
  display: flex;

  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`;
export const Itemcontentbox = styled.div`
  width: 50%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: wheat;
  @media (max-width: 768px) {
    width: 100%;
    height: 25rem;
  }
`;
export const Itemimg = styled.img`
  width: 60%;
  height: 50%;
  @media (max-width: 768px) {
    width: 73%;
    height: 90%;
  }
`;
export const Itemdescription = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  font-family: regular;

  @media (max-width: 768px) {
    width: 95%;
    height: 90%;
  }
`;
export const Itemquantity = styled.div`
  width: 100%;
  display: flex;
  gap: 5%;
  align-items: center;
  font-family: regular;
  font-weight: bold;
`;
export const Btn = styled.button`
  width: 30px;
  height: 30px;
  border: none;

  display: grid;
  place-items: center;
  font-size: 1.5em;
  border-radius: 5px;
  background-color: rgb(216, 125, 74);
  color: black;
  cursor: pointer;
`;

export const Addbtn = styled.button`
  width: 180px;
  height: 60px;
  border: none;
  font-size: 1.5em;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background-color: rgb(216, 125, 74);
  color: white;
  cursor: pointer;
`;

export const ItemFeatures = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    height: 65rem;
  }
`;

export const Itempicturescont = styled.div`
  width: 45%;
  height: 90%;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Itemdescriptiveimage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 2s;
  &:hover {
    scale: 1.3;
  }
  @media (max-width: 768px) {
    height: 100%;
    &:hover {
      scale: 1.1;
    }
  }
`;
export const Itemdescriptioncont = styled.div`
  width: 45%;
  height: 50%;
  border: 1px dashed black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-family: regular;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 95%;
    height: 30%;
    margin-top: 25px;
  
  }
`;
export const P = styled.p`
font-size: {(props) => props.size }
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
`;
