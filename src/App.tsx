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
import {
    fadeInSectionAnimation,
    fadeOutSectionAnimation,
} from "./styles/animations";
import { SwiperClass } from "swiper/react";
import PaginationBlock from "./ui/PaginationBlock";

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

const CategoryWrapper = styled.div<{ hidden?: boolean }>`
    @media (max-width: 820px) {
        animation: ${(props) =>
                props.hidden ? fadeOutSectionAnimation : fadeInSectionAnimation}
            0.5s;
        visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
        display: flex;
        flex-direction: column;
        order: 3;
        margin-bottom: 20px;
        margin: 40px;
    }
    @media (max-width: 720px) {
        margin: 20px;
    }

    display: none;
`;

const StyledHr = styled.hr`
    width: 100%;
    background-color: #c7cdd9;
`;

const CategoryName = styled.p`
    color: ${colors["Black-blue"]};
    font-size: 14px;
    font-weight: 700;
`;

const App: React.FC = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [swiperActiveIndex, setSwiperActiveIndex] = useState<number>(0);

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
        // eslint-disable-next-line
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
        // eslint-disable-next-line
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
            {categoryName && (
                <CategoryWrapper hidden={isLoading}>
                    <CategoryName>{categoryName}</CategoryName>
                    <StyledHr />
                </CategoryWrapper>
            )}
            <StoriesSection
                swiper={swiper}
                setSwiper={setSwiper}
                isLoading={isLoading}
                stories={stories}
                setSwiperActiveIndex={setSwiperActiveIndex}
            />
            <PaginationBlock
                setSwiperActiveIndex={setSwiperActiveIndex}
                swiperActiveIndex={swiperActiveIndex}
                swiper={swiper}
                setSwiper={setSwiper}
                stories={stories}
            />
        </AppWrapper>
    );
};

export default App;
