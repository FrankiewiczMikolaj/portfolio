import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin-top: 2rem;
  background-color: #33383e;
  color: white; // Text color
  padding: 2rem;
  text-align: center; // Centering the header
`;

const AboutText = styled.p`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: justify; // Justifying the text
  margin: 0 auto; // Centering the text block
  max-width: 800px; // You can adjust this for desired width
  font-size: 1.2rem;
`;

const About = () => (
    <AboutContainer id="about">
        <h1>About Me</h1>
        <AboutText> I'm a software developer with a passion for creating useful and innovative technology. Currently, I'm working as a Zoho Systems Specialist, where I implement and customize applications for my customers. I also study programming and databases, and I'm in the final stages of earning my degree. My aim is to use my expertise in technology to solve problems, make everyday tasks easier, and bring positive changes through my work.</AboutText>
    </AboutContainer>
);

export default About;
