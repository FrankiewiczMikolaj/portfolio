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

const EducationContainer = styled.div`
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
  overflow: hidden;
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

const schools = [
    {
        id: 0,
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/wlodkowic.jpg?alt=media&token=62581886-2fb0-4609-8042-eda6e9c706b0",
        title: "Pawel Wlodkowic University College in Plock",
        subtitle: "Programming & Databases",
        date: "May 2021 - Present",
        desc: "Aliquam vehicula non metus vitae vestibulum. Vestibulum eget tortor vestibulum, accumsan nisl eget, blandit eros. Donec interdum mauris et tellus rutrum, at posuere urna pharetra. Morbi eu sollicitudin nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In magna dolor, dictum eu ipsum at, elementum dignissim sapien. Cras porttitor purus sit amet ipsum lacinia, sit amet gravida libero pharetra. Nulla tempor accumsan nunc. Maecenas in pretium arcu. Donec vestibulum quam sapien.",
    },
    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/zsn2.jpeg?alt=media&token=f3bdf40d-e5d7-41ae-8275-f9b255152b8f",
        title: "Leon Rutkowski Complex of Schools No. 2 in Płońsk",
        subtitle: "IT technician",
        date: "Nov 2018 - Nov 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mi leo, scelerisque pretium odio ornare sed. Mauris vitae tristique odio, et lacinia urna. Donec iaculis sagittis sapien at fermentum. Nam viverra turpis nec massa gravida feugiat. Nulla dictum urna sed dignissim efficitur. Sed tristique nibh sem, vitae viverra dui bibendum ac. Morbi vitae mi ac urna eleifend venenatis id et libero. Suspendisse potenti. Phasellus iaculis semper enim, eu dictum quam aliquam id. Aliquam tincidunt nibh eget suscipit pulvinar. Pellentesque bibendum eleifend lacus, a ultrices nibh vehicula eget.",
    },
];
const Education = () => (
    <ThemeProvider theme={theme}>
        <EducationContainer id="education">
            <Wrapper>
                <h1>Education</h1>
                <TimelineSection>
                    <Timeline>
                        {schools.map((school, index) => (
                            <TimelineItem key={school.id}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="success" />
                                    {
                                        index !== schools.length - 1 && <TimelineConnector style={{ background: '#6b7783' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <InfoCard info={school}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </EducationContainer>
    </ThemeProvider>
);

export default Education;