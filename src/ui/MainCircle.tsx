import React, { useRef } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";
import CircleButton from "../features/CircleButton.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
    const circleButtonRef = useRef<HTMLDivElement | null>(null);

    return (
        <Circle>
            <CircleButton
                reference={circleButtonRef}
                value={6}
                width={56}
                height={56}
                animated
            />
            <CircleButton value={1} width={56} height={56} animated />
            <CircleButton value={2} width={56} height={56} animated />
            <CircleButton value={3} width={56} height={56} animated />
        </Circle>
    );
};

export default MainCircle;
