import React from "react";
import YearTitle from "../features/YearTitle";
import styled from "styled-components";
import { colors } from "../styles/colors";
import type { YearsCounterProps } from "../types/componentsProps";

const StyledContainer = styled.div`
    @media (max-width: 620px) {
        position: static;
        margin: 0 auto;
        transform: translateX(0);
        order: 2;
    }

    @media (max-width: 980px) {
        gap: 50px;
    }

    @media (max-width: 420px) {
        gap: 40px;
    }

    transition: all ease-in-out 0.35s;
    display: flex;
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 470px;
    gap: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    pointer-events: none;
    cursor: default;
`;

const YearsCounter: React.FC<YearsCounterProps> = ({ fromYear, toYear }) => {
    return (
        <StyledContainer>
            <YearTitle color={colors["Iris-100"]}>{fromYear}</YearTitle>
            <YearTitle color={colors["Fuschia-100"]}>{toYear}</YearTitle>
        </StyledContainer>
    );
};

export default YearsCounter;
