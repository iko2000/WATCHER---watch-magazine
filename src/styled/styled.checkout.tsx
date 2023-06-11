
import styled from "styled-components";
import "./Fonts.css";

export const CheckoutContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

export const CheckoutContainerBox = styled.div`
margin-top: 30px;
width: 95%;
height: 65rem;
margin-bottom: 30px;
@media (max-width: 1044px) {

height: 100rem;
}
`;

export const CheckoutHeader = styled.div`
width: 100%;
height: 5%;

@media (max-width: 1044px) {

height: 2%;
}
`;

export const FormContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: center;
background-color: wheat;
padding-top: 25px;
@media (max-width: 1044px) {

 width: 100%;
}
`;

export const CheckoutBody = styled.div`
width: 100%;
height: 95%;
display: flex;
gap: 100px;

@media (max-width: 1044px) {

    flex-direction: column;
  }
`;

export const CheckoutNamebox = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 3%;

input {
  width: 90%;
  height: 50%;
  border: 1px solid grey;
  background-color: wheat;
  padding-left: 5px;
  border-radius: 5px;

  &:active {
    color: cornflowerblue;
  }
}
`;

export const Checkoutmainbox = styled.div`
  width: "50%";
  height: "500px";
  display: "flex";
  align-items: "flex-start";
  background-color: "wheat";
  flex-direction: "column";
  padding: "15px";
  gap: "15px";
`

export const CheckoutAdress = styled.div`
width: 100%;
height: 20rem;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
gap: 10px;

`;

export const CheckoutPaybox = styled.div`
width: 100%;
height: 10rem;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
gap: 10px;
`;

export const CheckoutPerson = styled.div`
width: 100%;
height: 15rem;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
gap: 10px;
`;

export const CheckoutMethod = styled.div`
width: 100%;
height: 9rem;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
gap: 10px;
`;

export const CheckoutNumbers = styled.div`
width: 100%;
height: 5rem;
display: flex;
justify-content: center;
align-items: flex-start;
gap: 10px;
`;