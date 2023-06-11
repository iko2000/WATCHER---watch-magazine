import Box from "../components/Box.js";
import styled from "styled-components";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "../styled/styled.categories.js";
import tester from "../assets/clockpics/2.jpg";

export default function Homepage(props) {
  const navigate = useNavigate();
  const recievedinput = props.inp;
  const searched = data.filter((item) =>
    item.name.toLowerCase().includes(recievedinput.toLowerCase())
  );

  console.log(tester);
  console.log(data[0].image);

  return (
    <>
      <Container>
        <Wrapper>
          {recievedinput
            ? searched.map((item) => (
                <Box
                  name={item.name}
                  price={item.price}
                  src={item.image}
                  category={item.brand}
                  click={() => {
                    navigate(`/item`, {
                      state: data[item.id - 1],
                    });
                  }}
                />
              ))
            : data.map((item) => (
                <Box
                  name={item.name}
                  price={item.price}
                  src={item.image}
                  category={item.brand}
                  click={() => {
                    navigate(`/item`, {
                      state: data[item.id - 1],
                    });
                    console.log("WORKS");
                  }}
                />
              ))}
        </Wrapper>
      </Container>
    </>
  );
}
