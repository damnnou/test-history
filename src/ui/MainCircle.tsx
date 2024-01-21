import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";
import CircleButton from "../features/CircleButton.tsx";
import gsap, { Power1 } from "gsap";

const Cross = styled.div`
    &:before {
        position: absolute;
        background-color: ${colors["Black-blue-Opacity-10"]};
        top: -216px;
        left: 50%;
        right: 50%;
        width: 1px;
        height: 100vh;
        content: "";
    }

    &:after {
        position: absolute;
        background-color: ${colors["Black-blue-Opacity-10"]};
        top: 50%;
        bottom: 50%;
        left: 50%;
        transform: translateX(-50%);
        height: 1px;
        width: 1440px;
        content: "";
    }

    position: absolute;
    top: 215px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
`;

const Circle = styled.div`
    width: 530px;
    height: 530px;
    border-radius: 50%;
    border: 1px solid ${colors["Black-blue-Opacity-20"]};
    z-index: 10;
`;

const CircleButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    z-index: 100;
    max-width: 56px;
    max-height: 56px;
    position: absolute;
`;

const CircleButtonCategory = styled.label`
    position: absolute;
    left: calc(56px + 20px);
    top: 50%;
    transform: translateY(-50%);
    color: ${colors["Black-blue"]};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px; /* 150% */
`;

const MainCircle: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    const categoriesList = [
        {
            id: 1,
            name: "Технологии",
            styles: {
                left: "125px",
            },
            degree: 120,
        },
        {
            id: 2,
            name: "Кино",
            styles: {
                top: "15px",
                left: "380px",
            },
            degree: 60,
        },
        {
            id: 3,
            name: "Литература",
            styles: {
                top: "240.5px",
                right: "-25.5px",
            },
            degree: 0,
        },
        {
            id: 4,
            name: "Театр",
            styles: {
                bottom: "0px",
                right: "125px",
            },
            degree: 300,
        },
        {
            id: 5,
            name: "Спорт",
            styles: {
                left: "120px",
                bottom: "3px",
            },
            degree: 240,
        },
        {
            id: 6,
            name: "Наука",
            styles: {
                bottom: "240.5px",
                left: "-25.5px",
            },
            degree: 180,
        },
    ];
    const circleRef = useRef<HTMLDivElement | null>(null);
    const circleButtonRef = useRef<HTMLDivElement | null>(null);

    let currentDegree = 120;

    const handleMove = (id: number) => {
        const category = categoriesList.filter(
            (category) => category.id === id
        )[0];
        console.log(category);
        const circleButtonClass =
            "." + circleButtonRef.current?.className.split(" ")[0];

        const initialDegree = 60;

        const plusRotate =
            "+=" + (currentDegree - initialDegree - category.degree);
        const minusRotate = "-=" + (initialDegree - category.degree);

        gsap.to(circleRef.current, {
            rotation: plusRotate,
            duration: 0.5,
            ease: Power1.easeInOut,
        });

        gsap.to(circleButtonClass, {
            rotation: minusRotate,
            duration: 0.5,
            ease: Power1.easeInOut,
        });
        setSelectedCategory(category.id);
        currentDegree = category.degree;

        console.log(currentDegree);
    };

    return (
        <Cross>
            <Circle ref={circleRef}>
                {categoriesList.map((category) => (
                    <CircleButtonWrapper
                        key={category.id + category.name}
                        ref={circleButtonRef}
                        style={category.styles}
                    >
                        <CircleButton
                            animated
                            onClick={() => handleMove(category.id)}
                            selected={selectedCategory === category.id}
                            value={category.id}
                        />
                        {selectedCategory === category.id && (
                            <CircleButtonCategory>
                                {category.name}
                            </CircleButtonCategory>
                        )}
                    </CircleButtonWrapper>
                ))}
            </Circle>
        </Cross>
    );
};

export default MainCircle;
