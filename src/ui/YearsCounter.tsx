import React from "react";
import YearTitle from "../features/YearTitle.tsx";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";

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

const YearsCounter: React.FC = () => {
    return (
        <StyledContainer>
            <YearTitle color={colors["Iris-100"]}>{2015}</YearTitle>
            <YearTitle color={colors["Fuschia-100"]}>{2022}</YearTitle>
        </StyledContainer>
    );
};

export default YearsCounter;
