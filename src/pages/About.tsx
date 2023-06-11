import styled from "styled-components";
import img1 from "../assets/about/img1.webp";
import img2 from "../assets/about/img2.jpg";
import {  Aboutcontainer,
    Aboutbox,
    Aboutfloor,
    Aboutcontent,
    Aboutimgbox,
    Aboutimg } from "../styled/styled.about.js";



export default function About(){

    return <>
    <Aboutcontainer>
        <Aboutbox> 
       <Aboutfloor><Aboutcontent><span>Introducing</span> our renowned watch company, celebrated for its unwavering trust and exceptional quality. For decades, we have set the benchmark for excellence, crafting timepieces that transcend generations. With meticulous craftsmanship and a commitment to precision, our watches stand as a testament to our legacy. From the finest materials to the intricate detailing, every element is thoughtfully curated, reflecting our devotion to creating enduring masterpieces. Embrace the essence of timeless elegance and experience the unmatched reliability that has made us a trusted name in the world of horology. </Aboutcontent><Aboutimgbox><Aboutimg src={img1}/></Aboutimgbox></Aboutfloor>
       <Aboutfloor><Aboutimgbox><Aboutimg src={img2}/></Aboutimgbox><Aboutcontent><span>For generations </span>, our watch company has crafted timepieces that tell stories of excellence, innovation, and timeless elegance. Watches, timeless companions that adorn our wrists, combine precision and style in a mesmerizing way. These horological marvels effortlessly blend artistry and engineering, showcasing intricate complications and masterful craftsmanship. From elegant dress watches to rugged sports timepieces.</Aboutcontent></Aboutfloor>


        </Aboutbox>
    </Aboutcontainer>
    </>
}