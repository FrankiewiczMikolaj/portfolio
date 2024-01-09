import React from 'react'
import ProjectCard from '../../components/Projects/ProjectCard'


import styled from 'styled-components';

const projects = [
    {
        id: 0,
        title: "Planningset",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper ipsum est. Vivamus quis lectus fringilla, sagittis neque facilisis, consequat turpis. In ut neque convallis, pretium est ac, ultrices ex. Curabitur consectetur arcu nec nisl tempor luctus in at eros. Duis condimentum condimentum turpis, id molestie lectus. Morbi et ullamcorper libero, non pellentesque sem. Integer finibus odio ut leo maximus posuere. Aliquam fermentum justo ac facilisis sagittis. Nulla tempor congue risus, at tempor est sollicitudin id. Quisque lacus massa, porta id feugiat ac, suscipit eu odio. Cras pellentesque vulputate tortor, non feugiat ante placerat quis. Nullam tempus neque non massa faucibus, eget hendrerit magna hendrerit. Maecenas sit amet luctus lectus, vitae lacinia diam. Ut id dapibus tellus. Cras semper urna viverra, cursus tellus eget, pretium ante.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/planningset.png?alt=media&token=34ea64cd-24ac-4c80-9dce-13d2c90c293c",
    },
    {
        id: 1,
        title: "Currency Converter",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam eget nunc vehicula aliquet. Praesent accumsan sapien molestie ligula venenatis volutpat. Donec varius dolor ut tortor auctor pharetra. In hac habitasse platea dictumst. Aenean ultricies urna eget pulvinar sagittis. Quisque pellentesque consectetur sem sed porta. Vestibulum elementum aliquam mauris, sit amet imperdiet augue interdum id. Morbi a lacus at nisl condimentum aliquam. Pellentesque consectetur sed sapien vel dictum. Proin fringilla cursus ex, eu congue turpis eleifend ac. Duis commodo purus a nunc pulvinar, ut fermentum ante scelerisque. Aenean id suscipit odio, at iaculis risus.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/currency-converter-high-resolution-logo.png?alt=media&token=f7e57c0f-bd70-447d-9227-4ffc020fe2c1",
    },
    {
        id: 2,
        title: "Weather API",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam eget nunc vehicula aliquet. Praesent accumsan sapien molestie ligula venenatis volutpat. Donec varius dolor ut tortor auctor pharetra. In hac habitasse platea dictumst. Aenean ultricies urna eget pulvinar sagittis. Quisque pellentesque consectetur sem sed porta. Vestibulum elementum aliquam mauris, sit amet imperdiet augue interdum id. Morbi a lacus at nisl condimentum aliquam. Pellentesque consectetur sed sapien vel dictum. Proin fringilla cursus ex, eu congue turpis eleifend ac. Duis commodo purus a nunc pulvinar, ut fermentum ante scelerisque. Aenean id suscipit odio, at iaculis risus.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/wheatherapi-high-resolution-logo.png?alt=media&token=4f748d88-22fd-4f4b-a77a-1009297605c5",
    },
];


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 2.5rem;
    color: white;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`;

const Projects = ({ openModal, setOpenModal }) => {
    return (
        <Container id="projects">
            <Wrapper>
                <h1>Projects</h1>
                <CardContainer>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects