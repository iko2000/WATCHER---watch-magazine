
import { Link } from "react-router-dom";
import icon1 from "../assets/icons/classic.png";
import icon2 from "../assets/icons/electronic.png";
import icon3 from "../assets/icons/mechanic.png";
import icon4 from "../assets/icons/special.png";
import category from "../assets/icons/category.png";
import { useState } from "react";
import { Navbar, Icons, Bur } from "../styled/styled.navigation.js";


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
