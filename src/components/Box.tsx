

import { Container,  Imgbox, Textbox, P, Pdecorated, Btn, Category, Img} from "../styled/styled.box.js";


export default function Box(props: any) {

  return (
    <>
      <Container>
        <Imgbox>
          {" "}
          <Img src={props.src} />{" "}
        </Imgbox>
        <Textbox>
          <P>{props.name}</P> <Pdecorated>{props.price} $</Pdecorated>{" "}
        </Textbox>
        <Category>{props.category}</Category>
        <Btn onClick={props.click}>SHOP</Btn>
      </Container>
    </>
  );
}
