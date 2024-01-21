import React from "react";
import YearTitle from "../features/YearTitle.tsx";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";

interface YearsCounterProps {
    fromYear: number;
    toYear: number;
}

const StyledContainer = styled.div`
    display: flex;
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 400px;
    gap: 100px;
    left: 50%;
    transform: translateX(-50%);
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
