import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Blog from "../components/Blog.js";
import { useContext } from "react";
import { Themecontext } from "../App.js";
import { objcontext } from "../App.js";
import tick from "../assets/icons/tick.jpg";
import {
  Itemcontainer,
  Itembox,
  Itemimgbox,
  Itemcontentbox,
  Itemimg,
  Itemdescription,
  Itemquantity,
  Btn,
  Addbtn,
  ItemFeatures,
  Itempicturescont,
  Itemdescriptiveimage,
  Itemdescriptioncont,
} from "../styled/styled.item.js";
import { Icons } from "/users/administrator/desktop/react/watchmagazine/src/components/navigation.js";

export default function Item(props: any) {
  const location = useLocation();
  const addIt: any = useContext(Themecontext);
  const removestate: any = useContext(objcontext);

  const id = location.state?.id;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const P = styled.p`
  font-size: {(props) => props.size }
`;
  console.log(location.state);

  function handleClick() {
    addIt(id, quantity);
  }

  useEffect(() => {
    setPrice(location.state.price);
    setName(location.state.name);
  }, [quantity]);

  console.log(location.state.features[1].ironmade);
  return (
    <>
      <Itemcontainer>
        <Itembox>
          <Itemimgbox>
            <Itemimg src={location.state.image} />
          </Itemimgbox>
          <Itemcontentbox>
            <Itemdescription>
              <P size="1.5em">{location.state.name}</P>
              <P size="1.5em">{location.state.category}</P>
              <P size="1.5em">{location.state.description}</P>
              <P size="1.5em">$ {location.state.price} </P>
              <P size="1.5em">(In Stock): {location.state.quantity} </P>
              <Itemquantity>
                <Btn
                  onClick={() => {
                    if(quantity === 1) return;
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </Btn>{" "}
                <P>{quantity}</P>{" "}
                <Btn
                  onClick={() => {
                    if(quantity === location.state.quantity) return
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </Btn>
              </Itemquantity>
              <Addbtn onClick={handleClick}>Add to Cart </Addbtn>
            </Itemdescription>
          </Itemcontentbox>
        </Itembox>
        <ItemFeatures>
          <Itempicturescont>
            <Itemdescriptiveimage src={location.state.picture1} />
            <Itemdescriptiveimage src={location.state.picture2} />
            <Itemdescriptiveimage src={location.state.picture3} />
            <Itemdescriptiveimage src={location.state.picture4} />
          </Itempicturescont>
          <Itemdescriptioncont>
            <P>
              {location.state.features[0].waterproof ? (
                <div style={{display: "flex", alignItems: "center", gap: '10px'}}>
                  WATERPROOF <Icons src={tick} />{" "}
                </div>
              ) : null}
            </P>
            <P>{location.state.features[1].irondmade ?  (
                <div style={{display: "flex", alignItems: "center", gap: '10px'}}>
                  IRONDMADE <Icons src={tick} />{" "}
                </div>
              )  : null}</P>
            <P>{location.state.features[2].guarantie ?  (
                <div style={{display: "flex", alignItems: "center", gap: '10px'}}>
                  GUARANTEED  <Icons src={tick} />{" "}
                </div>
              )  : null}</P>
          </Itemdescriptioncont>
        </ItemFeatures>
        <Blog />
      </Itemcontainer>
    </>
  );
}
