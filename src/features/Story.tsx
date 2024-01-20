import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";

interface StoryProps {
    year: number;
    description: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 400px;
    max-height: 135px;
    gap: 15px;
`;

const SmallTitle = styled.h3`
    color: ${colors.Blue};
    font-family: "Bebas Neue";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 30px */
    text-transform: uppercase;
`;

const Text = styled.p`
    color: ${colors["Black-blue"]};
    margin: 0 0 0 0;
    font-family: "PT Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
`;

const Story: React.FC<StoryProps> = ({ year, description }) => {
    return (
        <Container>
            <SmallTitle>{year}</SmallTitle>
            <Text>{description}</Text>
        </Container>
    );
};

export default Story;
