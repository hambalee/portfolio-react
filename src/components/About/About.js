import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://www.thefullstackjunkie.com/_next/image?url=%2Fimg%2Fhero-img.png&w=1080&q=75"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Hambalee</strong> and I enjoy creating things that live on the internet. My interest in web development started back in 2014 when I decided to try editing custom Blogger themes — redesigning & modifying blogger themes taught me a lot about HTML & CSS!
I have become confident using the following technologies.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
