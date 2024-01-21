import React, { useRef } from "react";
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
    z-index: 1500;
`;

const MainCircle: React.FC = () => {
    const activeCategory = {
        id: 0,
        name: "Наука",
    };
    const circleRef = useRef<HTMLDivElement | null>(null);
    const circleButtonRef = useRef<HTMLDivElement | null>(null);

    const handleMove = () => {
        const circleButtonClass =
            "." + circleButtonRef.current?.className.split(" ")[0];
        gsap.to(circleRef.current, {
            rotation: "+=80",
            duration: 0.5,
            ease: Power1.easeInOut,
        });
        gsap.to(circleButtonClass, {
            rotation: "-=80",
            duration: 0.5,
            ease: Power1.easeInOut,
        });
    };

    return (
        <Cross>
            <Circle ref={circleRef}>
                <CircleButtonWrapper
                    ref={circleButtonRef}
                    onClick={handleMove}
                    style={{
                        position: "absolute",
                        left: "125px",
                    }}
                >
                    <CircleButton
                        selected={false}
                        animated
                        value={activeCategory.id}
                    ></CircleButton>
                    {}
                </CircleButtonWrapper>
                <CircleButtonWrapper
                    style={{
                        position: "absolute",
                        top: "15px",
                        left: "380px",
                    }}
                >
                    <CircleButton
                        animated
                        selected={false}
                        value={activeCategory.id}
                    ></CircleButton>
                    {activeCategory && <label>{activeCategory.name}</label>}
                </CircleButtonWrapper>
            </Circle>
        </Cross>
    );
};

export default MainCircle;
