import React from 'react';
import styled from 'styled-components';
import html5Icon from '../icons/icons8-html-5.svg';
import css3Icon from '../icons/icons8-css3.svg';
import javascriptIcon from '../icons/icons8-javascript.svg';
import bootstrapIcon from '../icons/icons8-bootstrap.svg';
import reactIcon from '../icons/icons8-react-native.svg';
import gitIcon from '../icons/icons8-git.svg';
import javaIcon from '../icons/java-icon.svg';
import zohoIcon from '../icons/zoho-icon.svg';
import muiIcon from '../icons/material-ui-1.svg';
import postgresqlIcon from '../icons/postgresql-icon.svg';
import mariadbIcon from '../icons/mariadb-svgrepo-com.svg';
import dockerIcon from '../icons/docker-svgrepo-com.svg';
import luaIcon from '../icons/lua-svgrepo-com.svg';
import figmaIcon from '../icons/figma-svgrepo-com.svg';
import postmanIcon from '../icons/postman-icon-svgrepo-com.svg';
import bashIcon from '../icons/bash-svgrepo-com.svg';

const Section = styled.section`
  max-width: 60rem;
  margin: auto;
  text-align: center;
  margin-top: 2.5rem;
  color: white;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillSet = styled.div`
  padding: 1rem;
  flex: 0 1 calc(25% - 2rem);

  @media (max-width: 1024px) {
    flex: 0 1 calc(33.33% - 1rem);
  }

  @media (max-width: 768px) {
    flex: 0 1 calc(25% - 1rem);
  }

  @media (max-width: 480px) {
    flex: 0 1 calc(25% - 0.5rem);
  }
`;

const Icon = styled.img`
  width: 75%;
  max-width: 7rem;
  height: auto;
  padding: 0.7rem;
  background-color: #33383e;
  border-radius: 11px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  margin: 8px;
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const SkillName = styled.p`
  color: white;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 414px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 390px) {
    font-size: 0.6rem;
  }

  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;
const Skills = () => {
    const mySkills = [
        { src: html5Icon, alt: 'HTML5', name: 'HTML' },
        { src: css3Icon, alt: 'CSS3', name: 'CSS' },
        { src: javascriptIcon, alt: 'JavaScript', name: 'JavaScript' },
        { src: bootstrapIcon, alt: 'Bootstrap', name: 'Bootstrap' },
        { src: muiIcon, alt: 'Material UI', name: 'Material UI' },
        { src: reactIcon, alt: 'React Native', name: 'React' },
        { src: javaIcon, alt: 'Java', name: 'Java' },
        { src: gitIcon, alt: 'Git', name: 'Git' },
        { src: zohoIcon, alt: 'ZOHO', name: 'ZOHO' },
        { src: postgresqlIcon, alt: 'PostgreSQL', name: 'PostgreSQL' },
        { src: mariadbIcon, alt: 'MariaDB', name: 'MariaDB' },
        { src: dockerIcon, alt: 'Docker', name: 'Docker' },
        { src: luaIcon, alt: 'Lua', name: 'Lua' },
        { src: figmaIcon, alt: 'Figma', name: 'Figma' },
        { src: postmanIcon, alt: 'Postman', name: 'Postman' },
        { src: bashIcon, alt: 'Bash', name: 'Bash' },
    ];

    return (
        <Section className="skills" id="skills">
            <h1>Skills</h1>
            <SkillsWrapper>
                {mySkills.map((skill, index) => (
                    <SkillSet key={index}>
                        <Icon src={skill.src} alt={skill.alt} loading="lazy" />
                        <SkillName>{skill.name}</SkillName>
                    </SkillSet>
                ))}
            </SkillsWrapper>
        </Section>
    );
};

export default Skills;
