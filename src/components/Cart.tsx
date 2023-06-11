import { CartContainer, CartPicture, CartImage, CartText, CartQuantity} from "../styled/styled.cart.js";



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
