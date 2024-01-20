import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "./styles/colors.ts";
import MainCircle from "./ui/MainCircle.tsx";
import MainTitle from "./features/MainTitle.tsx";
import YearsCounter from "./ui/YearsCounter.tsx";
import SelectCategorySection from "./ui/SelectCategorySection.tsx";
import StoriesSection from "./ui/StoriesSection.tsx";
const AppWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1440px;
    height: 100vh;
    margin: 0 auto;

    border-left: 1px solid ${colors["Black-blue-Opacity-10"]};
    border-right: 1px solid ${colors["Black-blue-Opacity-10"]};
`;

const App: React.FC = () => {
    return (
        <AppWrapper>
            <MainCircle />
            <MainTitle margin={"150px"}>Исторические даты</MainTitle>
            <YearsCounter />
            <SelectCategorySection />
            <StoriesSection />
        </AppWrapper>
    );
};

export default App;
