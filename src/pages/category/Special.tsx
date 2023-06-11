import Box from "/Users/Administrator/Desktop/React/watchmagazine/src/components/Box.js";
import styled from "styled-components";
import data from "/Users/Administrator/Desktop/React/watchmagazine/src/data.json";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "../../styled/styled.categories.js";

export default function Special(props) {
  const navigate = useNavigate();
  console.log(data);
  const recievedinput = props.inp;
  const searched = data.filter((item) =>
    item.name.toLowerCase().includes(recievedinput.toLowerCase())
  );

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
            : data.map((item) => {
                if (item.category.includes("Special")) {
                  return (
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
                  );
                }
              })}
        </Wrapper>
      </Container>
    </>
  );
}
