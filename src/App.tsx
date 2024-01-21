import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "./styles/colors.ts";
import MainCircle from "./ui/MainCircle.tsx";
import MainTitle from "./features/MainTitle.tsx";
import YearsCounter from "./ui/YearsCounter.tsx";
import SelectCategorySection from "./ui/SelectCategorySection.tsx";
import StoriesSection from "./ui/StoriesSection.tsx";
import history from "./api/history.ts";
import type { HistoryItem } from "./types/historyItem.ts";

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
    const [stories, setStories] = useState<HistoryItem[]>([]);

    const [fromYear, setFromYear] = useState<number>(2015);
    const [toYear, setToYear] = useState<number>(2022);

    useEffect(() => {
        history.getHistory().then((data) => setStories(data));
    }, []);

    useEffect(() => {
        console.log(stories);
    }, [stories]);

    return (
        <AppWrapper>
            <MainCircle />
            <MainTitle>Исторические даты</MainTitle>
            <YearsCounter fromYear={fromYear} toYear={toYear} />
            <SelectCategorySection />
            <StoriesSection stories={stories} />
        </AppWrapper>
    );
};

export default App;
