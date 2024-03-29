import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import type { PartialCircleButtonProps } from "../types/componentsProps";

const Button = styled.div<PartialCircleButtonProps>`
    @media (max-width: 420px) {
        width: 25px;
        height: 25px;
        font-size: 14px;
    }

    // Дефолтные стили
    width: ${(props) => (props.width ?? 50) + "px"};
    height: ${(props) => (props.height ?? 50) + "px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    color: ${colors["Black-blue"]};
    border: 1px solid ${colors["Black-blue-Opacity-50"]};
    background-color: #f4f5f9;
    z-index: 1000;
    transition: all ease-in-out 0.35s;
    &:hover {
        transform: scale(1);
        background-color: #f4f5f9;
    }

    ${(props) =>
        !props.disabled &&
        `
        &:hover {
        background-color: #fff;
    }`}

    // Стили, если кнопка анимированная
        ${(props) =>
        props.$animated &&
        `   
            background-color: ${colors["Black-blue"]};
            transform: scale(.1); 
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
            opacity: 0.50;
    }`}
`;

const CircleButton: React.FC<PartialCircleButtonProps> = ({
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
