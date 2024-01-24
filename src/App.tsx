import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import MainCircle from "./ui/MainCircle";
import MainTitle from "./features/MainTitle";
import YearsCounter from "./ui/YearsCounter";
import SelectCategorySection from "./ui/SelectCategorySection";
import StoriesSection from "./ui/StoriesSection";
import history from "./api/history";
import { initialCategories } from "./constants/categories";
import type { HistoryItem } from "./types/variablesProps";
import gsap, { Power1 } from "gsap";
import { opacityAnimation } from "./styles/animations";

const AppWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    min-height: 100vh;
    margin: 0 auto;
    border-left: 1px solid ${colors["Black-blue-Opacity-10"]};
    border-right: 1px solid ${colors["Black-blue-Opacity-10"]};
    box-sizing: border-box;
`;

const StyledHr = styled.hr`
    @media (max-width: 620px) {
        display: block;
        animation: ${opacityAnimation} 1s;
        order: 3;
        width: calc(100% - 40px);
        background-color: #c7cdd9;
        margin-bottom: 20px;
    }

    display: none;
`;

const CategoryName = styled.p`
    @media (max-width: 620px) {
        display: block;
        margin-left: 20px;
        margin-top: auto;
        margin-bottom: 20px;
        order: 2;
        animation: ${opacityAnimation} 1s;
        color: ${colors["Black-blue"]};
        font-size: 14px;
        font-weight: 700;
        line-height: 30px; /* 150% */
    }

    display: none;
`;

const App: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(2);
    const [categoriesList, setCategoriesList] = useState(initialCategories);
    const categoryName = categoriesList.find(
        (category) => selectedCategory === category.id
    )?.name;

    const circleRef = useRef<HTMLDivElement | null>(null);
    const circleButtonRef = useRef<HTMLDivElement | null>(null);

    const [stories, setStories] = useState<HistoryItem[]>([]);

    const [fromYear, setFromYear] = useState<number>(1987);
    const [toYear, setToYear] = useState<number>(1991);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Анимация подсчета лет
    const handleAnimateYears = (from: number, to: number) => {
        setIsLoading(true);

        // Остановка и очистка интервала
        const fastClean = (value: number) => {
            clearInterval(intervalId);
            setIsLoading(false);
            return value;
        };

        const intervalId = setInterval(() => {
            setFromYear((prev) => {
                if (prev === from) return fastClean(from);
                return from < prev ? (prev -= 1) : (prev += 1);
            });
            setToYear((prev) => {
                if (prev === to) return fastClean(to);
                return to < prev ? (prev -= 1) : (prev += 1);
            });
        }, 35); // каждые 35 мс обновляется состояние
    };

    // Выбор категории
    const handleCategoryChange = async (id: number) => {
        if (isLoading) return;
        setIsLoading(true);

        // Находим выбранную категорию
        const category = categoriesList.find((cat) => cat.id === id);

        if (!category) {
            console.error(`category with id ${id} not found`);
            return;
        }

        // Получаем класс из референса кнопки
        const circleButtonClass =
            "." + circleButtonRef?.current?.className.split(" ")[0];

        // Декларируем начальное/конечное положение в градусах
        const initialDegree = 60;

        // Вычисляем градус поворота на основе разницы текущего положения и конечного
        const rotateDegree = category.degree - initialDegree;

        const plusRotate = "+=" + rotateDegree;
        const minusRotate = "-=" + rotateDegree;

        gsap.to(circleRef?.current, {
            rotation: plusRotate, // поворачиваем круг на вычисленное значение градуса
            duration: 0.8,
            ease: Power1.easeInOut,
            onComplete: () => {},
        });

        gsap.to(circleButtonClass, {
            rotation: minusRotate, // поворачиваем внутренности кнопки в противоположную сторону
            duration: 0.8,
            ease: Power1.easeInOut,
        });

        // Устанавливаем итоговые значения в массив категорий
        setCategoriesList((prevCategories) =>
            prevCategories.map((cat) => {
                if (cat.id === category.id) {
                    return { ...cat, degree: initialDegree };
                } else {
                    return { ...cat, degree: cat.degree - rotateDegree };
                }
            })
        );
        setIsLoading(false);
        setSelectedCategory(category.id);
    };

    useEffect(() => {
        if (isLoading) return;
        const storyYears = stories.map((story) => story.year);
        handleAnimateYears(storyYears[0], storyYears[storyYears.length - 1]);
    }, [stories]);

    // Получение историй при смене категории
    useEffect(() => {
        setIsLoading(true);
        const category = categoriesList.find(
            (cat) => cat.id === selectedCategory
        );

        if (category) {
            console.log("fetching stories...");
            history
                .getHistoryByCategory(category.name)
                .then((data) => {
                    setStories(data);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [selectedCategory, categoriesList]);

    return (
        <AppWrapper>
            <MainCircle
                isLoading={isLoading}
                circleRef={circleRef}
                circleButtonRef={circleButtonRef}
                categoriesList={categoriesList}
                onRotate={handleCategoryChange}
                selectedCategory={selectedCategory}
            />
            <MainTitle>Исторические даты</MainTitle>
            <YearsCounter fromYear={fromYear} toYear={toYear} />
            <SelectCategorySection
                onChangeCategory={handleCategoryChange}
                selectedCategory={selectedCategory}
            />
            {!isLoading && categoryName && (
                <>
                    <StyledHr />
                    <CategoryName>{categoryName}</CategoryName>
                </>
            )}
            <StoriesSection isLoading={isLoading} stories={stories} />
        </AppWrapper>
    );
};

export default App;
