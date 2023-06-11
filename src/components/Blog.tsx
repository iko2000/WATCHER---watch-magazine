
import blogimage from "../assets/blog/blog.jpg";
import blogdata from "../blog.json";
import {BlogContainer, BlogBox, BlogText, Blogtextheader, BlogImage, BlogTextBox, BlogImageImg} from "../styled/styled.blog.js"



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
