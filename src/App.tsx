import React, { Ref, RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "./styles/colors.ts";
import MainCircle from "./ui/MainCircle.tsx";
import MainTitle from "./features/MainTitle.tsx";
import YearsCounter from "./ui/YearsCounter.tsx";
import SelectCategorySection from "./ui/SelectCategorySection.tsx";
import StoriesSection from "./ui/StoriesSection.tsx";
import history from "./api/history.ts";
import { initialCategories } from "./constants/categories.ts";
import type { HistoryItem } from "./types/historyItem.ts";
import gsap, { Power1 } from "gsap";

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
    const [selectedCategory, setSelectedCategory] = useState<number | null>(2);
    const [categoriesList, setCategoriesList] = useState(initialCategories);

    const circleRef = useRef<HTMLDivElement | null>(null);
    const circleButtonRef = useRef<HTMLDivElement | null>(null);

    const [stories, setStories] = useState<HistoryItem[]>([]);

    const [fromYear, setFromYear] = useState<number>(1987);
    const [toYear, setToYear] = useState<number>(1991);

    // Анимация для подсчета лет
    const handleAnimateYears = (from: number, to: number) => {
        console.log("going from", from);
        console.log("going to", to);
        let countNeeded = fromYear;

        const intervalId = setInterval(() => {
            setFromYear((prev) => {
                if (prev === from) {
                    clearInterval(intervalId);
                    return from;
                }
                return from < prev ? (prev -= 1) : (prev += 1);
            });
            setToYear((prev) => {
                if (prev === to) {
                    clearInterval(intervalId);
                    return to;
                }
                return to < prev ? (prev -= 1) : (prev += 1);
            });
        }, 50);
    };

    // Получаем истории при смене категории
    useEffect(() => {
        const category = categoriesList.find(
            (cat) => cat.id === selectedCategory
        );
        if (category) {
            history.getHistoryByCategory(category.name).then((data) => {
                setStories(data);
                const storyYears: number[] = data.map((story) => story.year);
                handleAnimateYears(
                    storyYears[0],
                    storyYears[storyYears.length - 1]
                );
            });
        } else return;
    }, [selectedCategory]);

    const handleSetCategory = async (id: number) => {
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
            duration: 0.5,
            ease: Power1.easeInOut,
        });

        gsap.to(circleButtonClass, {
            rotation: minusRotate, // поворачиваем внутренности кнопки в противоположную сторону
            duration: 0.5,
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
        setSelectedCategory(category.id);
    };

    return (
        <AppWrapper>
            <MainCircle
                circleRef={circleRef}
                circleButtonRef={circleButtonRef}
                categoriesList={categoriesList}
                onRotate={handleSetCategory}
                selectedCategory={selectedCategory}
            />
            <MainTitle>Исторические даты</MainTitle>
            <YearsCounter fromYear={fromYear} toYear={toYear} />
            <SelectCategorySection
                onChangeCategory={handleSetCategory}
                selectedCategory={selectedCategory}
            />
            <StoriesSection stories={stories} />
        </AppWrapper>
    );
};

export default App;
