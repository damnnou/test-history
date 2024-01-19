import React from "react";
import CircleButton from "./features/CircleButton.tsx";
import YearTitle from "./features/YearTitle.tsx";
import styled from "styled-components";
import { colors } from "./styles/colors.ts";

const AppWrapper = styled.div`
    width: 1440px;
    border-left: 1px solid ${colors["Black-blue-Opacity-10"]};
    border-right: 1px solid ${colors["Black-blue-Opacity-10"]};
`;

const App: React.FC = () => {
    return (
        <AppWrapper>
            <CircleButton>{1}</CircleButton>
            <YearTitle color={colors["Fuschia-100"]}>{2015}</YearTitle>
            <YearTitle color={colors["Iris-100"]}>{2015}</YearTitle>
        </AppWrapper>
    );
};

export default App;
