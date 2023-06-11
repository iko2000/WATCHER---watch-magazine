import styled from "styled-components";
import "./Fonts.css";

export const CartContainer = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
gap: 10%;
align-items: center;
border: 1px dashed black;
`;

export const CartPicture = styled.div`
width: 30%;
height: 100%;
display: flex;
`;

export const CartImage = styled.img`
width: 100%;
height: 100%;
`;

export const CartText = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
gap: 30%;
`;

export const CartQuantity = styled.div`
width: 10%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;