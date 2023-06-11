import styled from "styled-components";
import blogimage from "../assets/blog/blog.jpg";
import blogdata from "../blog.json";
const BlogContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media (max-width: 768px) {
   
   height: 40rem;

 }
`;

const BlogBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
`;

const BlogText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Blogtextheader = styled.h5`
  font-size: 20px;
  color: yellow;
`;
const BlogTextBox = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlogImage = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const BlogImageImg = styled.img`
  width: 90%;
  height: 95%;
`;

export default function Blog() {
  return (
    <BlogContainer>
      <BlogBox>
        <BlogText>
          <Blogtextheader>
            Elegance with <span style={{ color: "black" }}>Passion</span>
          </Blogtextheader>
          <BlogTextBox>{blogdata[0]}</BlogTextBox>
        </BlogText>
        <BlogImage>
          <BlogImageImg src={blogimage} alt="Blog Image" />
        </BlogImage>
      </BlogBox>
    </BlogContainer>
  );
}
