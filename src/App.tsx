import styled from "styled-components";
import GlobalStyle from "./styled/globalStyles.js";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import fb from "./assets/social-media/icon-facebook.svg";
import insta from "./assets/social-media/icon-instagram.svg";
import twitter from "./assets/social-media/icon-twitter.svg";
import Portal from "./portals/Portal.js";
import data from "./data.json";
import Navigation from "./components/Navigation.js";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";
import Item from "./pages/Item.js";
import Classic from "./pages/category/Classic.js";
import Electronic from "./pages/category/Electronic.js";
import Mechanic from "./pages/category/Mechanic.js";
import Special from "./pages/category/Special.js";
import Cart from "./components/Cart.js";
import Checkout from "./pages/Checkout.js";
import cartpicture from "./assets/icons/cart.png";
import searchpicture from "./assets/icons/search.png"
import GlobalStylefont from "./styled/globalStyles.js";
import ad from "./assets/social-media/ad.jpg"
import {
  Generalcontainer,
  Generalbox,
  Main,
  Nav,
  Aside,
  Header,
  Headerbox,
  Search,
  Mainbox,
  Footer,
  Foot,
  Footdiv,
  Footdiv2,
  Footdiv3,
  Span,
  Cartbox,
  Inp,
  Logo
} from "./styled/styledApp.js";

const Img1 = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Adimage = styled.img`
  width:100%;
  height: 200px;
`
export const objcontext = createContext<any>(" ");
export const Themecontext = createContext("");
function App() {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [cart, setCart] = useState(false);
  const [bill, setBill] = useState<any>(0);
  const [inptvalue, setInpvalue] = useState("");
  const [numberofItems, setNumberofItems] = useState<any>(0);

  const defaultCart = () => {
    let cart: any = {};
    for (let i = 1; i < data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [obj, setObj] = useState(defaultCart());

  const addItem: any = (itemId: any, quantity: any) => {
    setObj((obj: any) => ({ ...obj, [itemId]: quantity }));


  };

  useEffect(() => {
    let totalBill = 0;
    Object.entries(obj).forEach(([itemId, quantity]: any) => {
      const item: any = data.find((item) => item.id == itemId);
      if (item) {
        totalBill += item.price * quantity;
      }
    });
    setBill(totalBill);
    const total = Object.values(obj).reduce(
      (accumulator: any, currentValue: any) => {
        return accumulator + currentValue;
      },
      0
    );
    setNumberofItems(total);
  }, [obj, data]);

  return (
    <>
      <objcontext.Provider value={{ obj, bill }}>
        <Themecontext.Provider value={addItem}>
          <Generalcontainer>
            <GlobalStyle />
            <GlobalStylefont/>
            <Generalbox>
              <Nav isVisible={active}>
                <Navigation />
              </Nav>
              <Main>
                <Header>
                  <Headerbox>
                    <Logo><Link onClick={() => setActive(true)} to="/">
                      WATCHER
                    </Link>
                    </Logo>
                    <Link onClick={() => setActive(true)} to="/">
                      HOME
                    </Link>
                    <Link onClick={() => setActive(false)} to="/aboutus">
                      ABOUT US
                    </Link>
                    <Img1 onClick={() => setCart(!cart)} src={cartpicture} />

                    <Portal>
                      {cart ? (
                        <Cartbox>
                          {data.map((item) => {
                            if (obj[item.id] !== 0) {
                              return (
                                <>
                                  <Cart
                                    style2={{ fontSize: "10px" }}
                                    name={item.name}
                                    src={item.image}
                                    price={item.price}
                                    quantity={obj[item.id]}
                                  />
                                </>
                              );
                            }
                          })}
                          {numberofItems ? (
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              {" "}
                              <p>TOTAL: </p>
                              <p>$ {bill} </p>
                            </div>
                          ) : null}
                          {numberofItems ? (
                            <button
                              style={{ width: "100%", borderRadius: "10px" }}
                              onClick={() => {
                                setActive(false);
                                navigate("/checkout");
                              }}
                            >
                              CHECK OUT
                            </button>
                          ) : null}
                        </Cartbox>
                      ) : (
                        <></>
                      )}
                    </Portal>
                  </Headerbox>
                  <Search isVisible={active}>
                    {" "}
                    <Inp
                      placeholder="Search for item..."
                      onChange={(e) => {
                        setInpvalue(e.target.value);
                      }}
                      value={inptvalue}
                    /> 
                     <Img1 src={searchpicture}/>
                  </Search>
                </Header>
                <Mainbox onClick={() => setInpvalue('')}>
                  <Routes>
                    <Route path="/" element={<Homepage inp={inptvalue} />} />
                    <Route path="/aboutus" element={<About />} />
                    <Route path="/item" element={<Item />} />
                    <Route
                      path="/classic"
                      element={<Classic inp={inptvalue} />}
                    />
                    <Route
                      path="/electronic"
                      element={<Electronic inp={inptvalue} />}
                    />
                    <Route
                      path="/mechanic"
                      element={<Mechanic inp={inptvalue} />}
                    />
                    <Route
                      path="/special"
                      element={<Special inp={inptvalue} />}
                    />
                    <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                </Mainbox>
              </Main>

              <Aside isVisible={active}><Adimage src={ad} alt="advertisment"/> </Aside>
            </Generalbox>
          </Generalcontainer>
          <Footer>
            <Foot>
              <Footdiv>
                <Footdiv2>WATCHHUNTER</Footdiv2>{" "}
                <Footdiv3>
                  "Watchhunter is brand with full of possibilites and bright
                  future". <Span>Copyright 2021. All Rights Reserved</Span>{" "}
                </Footdiv3>{" "}
              </Footdiv>
              <Footdiv>
                <Footdiv2>
                  {" "}
                  <Link to="/">HOME</Link>
                  <Link to="/aboutus">ABOUT US</Link>
                </Footdiv2>
                <Footdiv2>
                  {" "}
                  <Img1 src={fb} />
                  <Img1 src={insta} />
                  <Img1 src={twitter} />
                </Footdiv2>
              </Footdiv>
            </Foot>
          </Footer>
        </Themecontext.Provider>
      </objcontext.Provider>
    </>
  );
}

export default App;
