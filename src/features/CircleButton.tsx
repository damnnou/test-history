import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";

interface CircleButtonProps {
    width?: string;
    height?: string;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button = styled.button<{
    width?: string;
    height?: string;
    disabled?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f5f9;
    width: ${(props) => props.width ?? "56px"};
    height: ${(props) => props.height ?? "56px"};
    font-size: 20px;
    border: 1px solid
        ${(props) =>
            props.disabled
                ? colors["Black-blue-Opacity-20"]
                : colors["Black-blue-Opacity-50"]};
    border-radius: 50%;
    color: ${(props) =>
        props.disabled
            ? colors["Black-blue-Opacity-50"]
            : colors["Black-blue"]};
    cursor: ${(props) => !props.disabled && "pointer"};
`;

const ButtonInnerText = styled.span`
    font-family: "PT Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
`;

const CircleButton: React.FC<CircleButtonProps> = ({ children, ...props }) => {
    return (
        <Button {...props}>
            <ButtonInnerText>{children}</ButtonInnerText>
        </Button>
    );
};

export default CircleButton;
