import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../styles/colors.ts";
import type { CircleButtonProps } from "../types/componentsProps.ts";

const Button = styled.div<CircleButtonProps>`
    // Дефолтные стили
    width: ${(props) => (props.width ? props.width + "px" : "50px")};
    height: ${(props) => (props.height ? props.height + "px" : "50px")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid ${colors["Black-blue-Opacity-50"]};
    background-color: #f4f5f9;
    z-index: 1000;

    ${(props) =>
        !props.disabled &&
        `
        transition: all ease-in-out 0.25s;
        &:hover {
        background-color: #fff;
    }`}

    // Стили, если кнопка анимированная
        ${(props) =>
        props.animated &&
        `   
            background-color: ${colors["Black-blue"]};
            transform: scale(.1); 
            transition: all ease-in-out .25s;

            &:hover {
                transform: scale(1);
                background-color: #f4f5f9;
            };
    `}

    // Стили, если кнопка выбрана
    ${(props) =>
        props.selected &&
        `
        background-color: #f4f5f9;
        transform: scale(1);
    `}


    // Стили, если кнопка отключена
    ${(props) =>
        props.disabled &&
        `background-color: #f4f5f9;
            cursor: default;
            border: 1px solid ${colors["Black-blue-Opacity-20"]};
            color: ${colors["Black-blue"]}
    }`}
`;
const CircleButton: React.FC<CircleButtonProps> = ({
    children,
    reference,
    ...props
}) => {
    return (
        <Button {...props} ref={reference}>
            {children ?? props.value}
        </Button>
    );
};

export default CircleButton;
