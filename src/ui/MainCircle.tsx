import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../styles/colors.ts";
import CircleButton from "../features/CircleButton.tsx";

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
const anime = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CircleButtonCategory = styled.label`
    animation: ${anime} 0.5s;
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

const MainCircle: React.FC = ({
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
                            animated
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
