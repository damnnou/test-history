import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import CircleButton from "../features/CircleButton";
import { MainCircleProps } from "../types/componentsProps";
import { opacityAnimation } from "../styles/animations";

const Cross = styled.div`
    @media (max-width: 820px) {
        display: none;
    }

    &:before {
        position: absolute;
        background-color: ${colors["Black-blue-Opacity-10"]};
        width: 1px;
        height: 100%;
        content: "";
        pointer-events: none;
    }

    &:after {
        pointer-events: none;
        top: 480px;
        position: absolute;
        background-color: ${colors["Black-blue-Opacity-10"]};
        height: 1px;
        width: 100%;
        content: "";
    }

    pointer-events: auto;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 0;
`;

const Circle = styled.div`
    transform: translateY(215px);
    width: 530px;
    height: 530px;
    max-width: 530px;
    max-height: 530px;
    border-radius: 50%;
    border: 1px solid ${colors["Black-blue-Opacity-20"]};
    z-index: 20;
`;

const CircleButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    z-index: 1000;
    max-width: 56px;
    max-height: 56px;
    position: absolute;

    // Анимация для кнопки
    &:hover {
        cursor: pointer;
        div {
            transform: scale(1);
            background-color: #f4f5f9;
        }
    }
`;

const CircleButtonLabel = styled.label`
    animation: ${opacityAnimation} 1s;
    transition: all;
    position: absolute;
    left: calc(56px + 20px);
    top: 50%;
    transform: translateY(-50%);
    color: ${colors["Black-blue"]};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px; /* 150% */
`;

const MainCircle: React.FC<MainCircleProps> = ({
    isLoading,
    categoriesList,
    onRotate,
    selectedCategory,
    circleRef,
    circleButtonRef,
}) => {
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
                            width={56}
                            height={56}
                            $animated
                            onClick={() =>
                                selectedCategory !== category.id &&
                                onRotate(
                                    category.id,
                                    circleRef,
                                    circleButtonRef
                                )
                            }
                            selected={selectedCategory === category.id}
                            value={category.id}
                        />
                        {!isLoading && selectedCategory === category.id && (
                            <CircleButtonLabel>
                                {category.name}
                            </CircleButtonLabel>
                        )}
                    </CircleButtonWrapper>
                ))}
            </Circle>
        </Cross>
    );
};

export default MainCircle;
