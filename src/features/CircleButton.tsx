import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";

interface CircleButtonProps {
    children: number;
}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f5f9;
    width: 56px;
    height: 56px;
    font-size: 20px;
    border: 1px solid ${colors["Black-blue-Opacity-50"]};
    border-radius: 50%;
`;

const ButtonInnerText = styled.span`
    color: ${colors["Black-blue"]};
    font-family: "PT Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
`;

const CircleButton: React.FC<CircleButtonProps> = ({ children }) => {
    return (
        <Button>
            <ButtonInnerText>{children}</ButtonInnerText>
        </Button>
    );
};

export default CircleButton;
