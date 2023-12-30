import React from 'react';
import styled from 'styled-components';
import { Avatar, Grid } from '@mui/material';
import GitHubIcon from '../icons/github-mark-white.svg';
import BuyMeACoffeeIcon from '../icons/buy-me-a-coffee.svg';
import LinkedInIcon from '../icons/linkedin.svg';
import image from '../images/1614614814389.jpg';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Typewriter from 'typewriter-effect';

const SectionContainer = styled.section`
  padding-top: 5vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: auto;
  }
`;

const ProfileContainer = styled.div`
  color: white;
  margin-top: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: -3.5rem;
  }

  .job-title {
    margin-top: -0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    gap: 5px;
  }

  .hello-text {
    margin-bottom: 0rem;
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledButton = styled.button`
  margin-top: 1vh;
  margin-bottom: 0.2vh;
  display: flex;
  height: 48px;
  padding: 0;
  background: #009578;
  border: none;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #008168;
  }

  &:active {
    background: #006e58;
  }
`;

const ButtonText = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  height: 100%;
`;

const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.08);
  height: 100%;
`;
const IconButton = ({ text }) => (
    <StyledButton>
        <ButtonText>{text}</ButtonText>
        <ButtonIcon>
            <CloudDownloadIcon style={{ color: 'white', fontSize: '1.9em' }} />
        </ButtonIcon>
    </StyledButton>
);

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  cursor: pointer;
`;

const Home = () => {
    return (
        <>
            <SectionContainer>
                <Avatar
                    src={image}
                    alt="Mikołaj Frankiewicz"
                    sx={{ width: 300, height: 300 }}
                />
                <ProfileContainer>
                    <h4 className="hello-text">Hello, my name is</h4>
                    <h1 className={"name"}>Mikołaj Frankiewicz</h1>
                    <h4 className="job-title">
                        I'm a{' '}
                        <span>
              <Typewriter
                  options={{
                      strings: ['Software Developer', 'Data Engineer'],
                      autoStart: true,
                      loop: true,
                  }}
              />
            </span>
                    </h4>
                    <Grid container justifyContent="center">
                        <IconButton text="Download Resume" />
                    </Grid>
                    <SocialsContainer>
                        <SocialIcon href="https://linkedin.com/" target="_blank">
                            <img src={LinkedInIcon} alt="Buy Me a Coffee" width="33" />
                        </SocialIcon>
                        <SocialIcon href="https://github.com/" target="_blank">
                            <img src={GitHubIcon} alt="Buy Me a Coffee" width="33" />
                        </SocialIcon>
                        <SocialIcon href="https://buymeacoffee.com/" target="_blank">
                            <img src={BuyMeACoffeeIcon} alt="Buy Me a Coffee" width="23" />
                        </SocialIcon>
                    </SocialsContainer>
                </ProfileContainer>
            </SectionContainer>
        </>
    );
};

export default Home;