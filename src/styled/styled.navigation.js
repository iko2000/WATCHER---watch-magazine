import styled from "styled-components";
import "./Fonts.css";

export const Navbar = styled.div`
  width: 80%;
  height: 25rem;
  display: flex;
  background-color: wheat;
  justify-content: center;
  margin-top: 25px;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  position: absolute;

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
export const Bur = styled.img`
  width: 20px;
  height: 20px;

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
