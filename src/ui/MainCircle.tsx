import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";
import CircleButton from "../features/CircleButton.tsx";

const Circle = styled.div`
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
    width: 530px;
    height: 530px;
    border-radius: 50%;
    border: 1px solid ${colors["Black-blue-Opacity-20"]};
`;

const MainCircle: React.FC = () => {
    return (
        <Circle>
            <CircleButton animated>{6}</CircleButton>
        </Circle>
    );
};

export default MainCircle;
