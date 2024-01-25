import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import type { StoryProps } from "../types/componentsProps";

const Container = styled.div`
    @media (max-width: 620px) {
        width: 300px;
    }

    @media (max-width: 520px) {
        width: 280px;
    }

    @media (max-width: 440px) {
        width: 240px;
    }

    @media (max-width: 400px) {
        width: 220px;
    }

    @media (max-width: 380px) {
        width: 200px;
    }

    display: flex;
    flex-direction: column;
    width: 320px;
    max-width: 400px;
    max-height: 130px;
    gap: 15px;
`;

const SmallTitle = styled.h3`
    @media (max-width: 440px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        text-transform: uppercase;
    }

    color: ${colors.Blue};
    font-family: "Bebas Neue";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 30px */
    text-transform: uppercase;
`;

const Text = styled.p`
    @media (max-width: 440px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 145%; /* 20.3px */
    }
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
