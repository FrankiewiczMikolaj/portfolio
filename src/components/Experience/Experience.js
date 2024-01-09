import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import InfoCard from '../InfoCard';


const theme = createTheme({
    palette: {
        success: {
            main: '#6b7783',
        },
    },
});

const ExperienceContainer = styled.div`
  color: white;
  background-color: #33383e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 960px) {
    padding: 0;
    margin: 0;
  }
  @media (max-width: 280px) {
    width: 100%;
    overflow-x: hidden;
  }
`;


const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    margin-top: 2.5rem;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const experiences = [
    {
        id: 0,
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/zpartner.png?alt=media&token=93da0aa1-36b5-4f27-86fe-bdc8193110ea",
        title: "Zoho Systems Specialist",
        subtitle: "ZPartner",
        date: "May 2021 - Present",
        desc: "Aliquam vehicula non metus vitae vestibulum. Vestibulum eget tortor vestibulum, accumsan nisl eget, blandit eros. Donec interdum mauris et tellus rutrum, at posuere urna pharetra. Morbi eu sollicitudin nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In magna dolor, dictum eu ipsum at, elementum dignissim sapien. Cras porttitor purus sit amet ipsum lacinia, sit amet gravida libero pharetra. Nulla tempor accumsan nunc. Maecenas in pretium arcu. Donec vestibulum quam sapien.",
        doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/Zoho%20Certificate.png?alt=media&token=01ea8b4d-b31f-4f71-b0a7-bf869677a075",
    },
    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/software%26service.jpg?alt=media&token=832673f9-b355-4147-a58e-8d365b59a96f",
        title: "Apprentice",
        subtitle: "Software & Service",
        date: "Nov 2018 - Nov 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mi leo, scelerisque pretium odio ornare sed. Mauris vitae tristique odio, et lacinia urna. Donec iaculis sagittis sapien at fermentum. Nam viverra turpis nec massa gravida feugiat. Nulla dictum urna sed dignissim efficitur. Sed tristique nibh sem, vitae viverra dui bibendum ac. Morbi vitae mi ac urna eleifend venenatis id et libero. Suspendisse potenti. Phasellus iaculis semper enim, eu dictum quam aliquam id. Aliquam tincidunt nibh eget suscipit pulvinar. Pellentesque bibendum eleifend lacus, a ultrices nibh vehicula eget.",
    },
];
const Experience = () => (
    <ThemeProvider theme={theme}>
    <ExperienceContainer>
        <Wrapper>
            <h1>Experience</h1>
            <TimelineSection>
                <Timeline>
                    {experiences.map((experience, index) => (
                        <TimelineItem key={experience.id}>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="success" />
                                {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#6b7783' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <InfoCard info={experience}/>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>

            </TimelineSection>
        </Wrapper>
    </ExperienceContainer>
    </ThemeProvider>
);

export default Experience;