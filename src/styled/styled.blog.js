import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-top: 150px;
    height: 40rem;
  }
`;

export const BlogBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
`;

export const BlogText = styled.div`
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
export const Blogtextheader = styled.h5`
  font-size: 20px;
  color: yellow;
`;
export const BlogTextBox = styled.div`
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

export const BlogImage = styled.div`
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

export const BlogImageImg = styled.img`
  width: 90%;
  height: 95%;
`;
