import styled from "styled-components";

const CartContainer = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 10%;
  align-items: center;
`;

const CartPicture = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
`;

const CartImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CartText = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 30%;
`;

const CartQuantity = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Cart(props: any) {
  return (
    <CartContainer style={props.style}>
      <CartPicture>
        <CartImage src={props.src} />
      </CartPicture>
      <CartText>
        <p style={props.style2}>{props.name}</p>
        <p style={props.style2}>$ {props.price}</p>
      </CartText>
      <CartQuantity>
        <p style={props.style2}>
          {" "}
          <p>{props.quantity}</p>
          <p>X</p>{" "}
        </p>
      </CartQuantity>
    </CartContainer>
  );
}

export default Cart;
