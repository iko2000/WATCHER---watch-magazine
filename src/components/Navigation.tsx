import styled from "styled-components";
import { Link } from "react-router-dom";
import icon1 from "../assets/icons/classic.png";
import icon2 from "../assets/icons/electronic.png";
import icon3 from "../assets/icons/mechanic.png";
import icon4 from "../assets/icons/special.png";
import category from "../assets/icons/category.png";

import { useState } from "react";
const Navbar = styled.div`
  width: 80%;
  height: 25rem;
  display: flex;
  background-color: wheat;
  justify-content: center;
  margin-top: 25px;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 768px) {
    height: 8rem;
    width: 100px;
    gap: 3px;
    margin-left: 40px;
    padding-left: 18px;
    background-color: transparent;
    align-items: flex-end;

    a {
      font-size: 10px;
      gap: 3px;
    }
  }
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
`;
const Bur = styled.img`
  width: 20px;
  height: 20px;

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
export default function Navigation() {
  const [burger, setBurger] = useState(true);
  return (
    <>
      <Bur src={category} onClick={() => setBurger(!burger)} />
      {burger ? (
        <Navbar>
          <Link to="/classic">
            Classic <Icons src={icon1} />
          </Link>
          <Link to="/mechanic">
            Mechanic <Icons src={icon3} />{" "}
          </Link>
          <Link to="/electronic">
            Electric <Icons src={icon2} />
          </Link>
          <Link to="/special">
            Special Ones <Icons src={icon4} />
          </Link>
        </Navbar>
      ) : (
        <></>
      )}
    </>
  );
}
