import "./Fonts.css";
import styled from "styled-components";
export const Logo = styled.h1`
  font-size: 20px;
  font-family: logo;
`;
export const Generalcontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Generalbox = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;

  background-color: white;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
export const Main = styled.main`
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Nav = styled.nav`
  width: 15%;
  height: 45rem;

  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  font-family: regular;

  @media (max-width: 768px) {
    width 10%;
    height: 5rem
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    

  }
`;

export const Aside = styled.div`
  width: 15%;
  height: 25rem;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 5rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;
export const Headerbox = styled.div`
  width: 80%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  background-color: wheat;
  font-family: regular;

  @media (max-width: 768px) {
    width: 99%;

    a {
      font-size: 12px;
    }
  }
`;
export const Search = styled.div`
  width: 60%;
  height: 2.5rem;
  border: 1px solid black;
  display: flex;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  justify-content: center;
  align-items: center;
`;

export const Mainbox = styled.div`
  width: 100%;
  display: flex;
`;
export const Footer = styled.footer`
  width: 100%;
  height: 25rem;
  display: flex;

  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 15rem;
  }
`;
export const Foot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #1f2937;
`;

export const Footdiv = styled.div`
  width: 50%;
  height: 100%;
  color: wheat;

  a {
    color: wheat;
  }
`;

export const Footdiv2 = styled.div`
  width: 100%;
  height: 50%;
  color: wheat;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const Footdiv3 = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  @media (max-width: 776px) {
    padding: 18px;
  }
`;
export const Span = styled.span`
  font-size: 1.1em;
`;
export const Cartbox = styled.div`
  width: 150px;
  height: 300px;

  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 15px;
  right: 30%;
  top: 50px;
  @media (max-width: 768px) {
    right: 5%;
  }
`;
export const Inp = styled.input`
  width: 90%;
  height: 80%;
  border: none;

  &:acitve {
    border: none;
  }
`;

export const Img1 = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Adimage = styled.img`
  width: 100%;
  height: 200px;
`;
