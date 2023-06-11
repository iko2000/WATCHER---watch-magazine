import Box from "../components/Box.js";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "../styled/styled.categories.js" 


export default function Homepage(props:any) {
  const navigate = useNavigate();
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

                  }}
                />
              ))}
        </Wrapper>
      </Container>
    </>
  );
}
