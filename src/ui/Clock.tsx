import React, { useRef } from "react";
import styled from "styled-components";
import { gsap, Power1 } from "gsap";

const Circle = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #eee;
`;

const Container = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #3498db;
    border-radius: 50%;
    transform-origin: 50% 150%;
    cursor: pointer;
`;

const Clock = () => {
    const containerRefs = useRef([]);

    const initialPositions = [60, 90, 120, 150, 210, 330];

    const handleMove = () => {
        gsap.to(containerRefs.current, {
            rotation: "+=30",
            duration: 0.5,
            ease: Power1.easeInOut,
        });
    };

    return (
        <Circle>
            {initialPositions.map((position, index) => (
                <Container
                    key={index}
                    ref={(el) => (containerRefs.current[index] = el)}
                    style={{ transform: `rotate(${position}deg)` }}
                />
            ))}
            <button onClick={handleMove}>Move Containers</button>
        </Circle>
    );
};

export default Clock;
