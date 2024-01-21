import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../styles/colors.ts";

interface CircleButtonProps {
    width?: string;
    height?: string;
    disabled?: boolean;
    animated?: boolean;
    children?: React.ReactNode;
    style?: Object;
}

const Button = styled.div<CircleButtonProps>`
    // Дефолтные стили
    width: ${(props) => props.width ?? "56px"};
    height: ${(props) => props.height ?? "56px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid ${colors["Black-blue-Opacity-50"]};
    color: ${colors["Black-blue"]};

    // Стили, если кнопка анимированная
    ${(props) =>
        props.animated &&
        `   
            background-color: ${colors["Black-blue"]};
            transform: scale(.1); 

            &:hover {
                transition: all ease-in-out .25s;
                transform: scale(1);
                background-color: #f4f5f9;
            };
    `}

    // Стили, если кнопка отключена
    ${(props) =>
        props.disabled &&
        `
            cursor: default;
            border: 1px solid ${colors["Black-blue-Opacity-20"]};
            color: ${colors["Black-blue"]}
    `}
`;
const CircleButton: React.FC<CircleButtonProps> = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
};

export default CircleButton;
