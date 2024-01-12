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
import { experiences } from '../../configuration/constants';


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
    overflow: hidden;
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

const Experience = () => (
    <ThemeProvider theme={theme}>
    <ExperienceContainer id="experience">
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