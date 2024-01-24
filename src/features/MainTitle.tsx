import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import type { ComponentWithChildren } from "../types/componentsProps";

const Title = styled.h1`
    @media (max-width: 980px) {
        font-size: 40px;
    }

    @media (max-width: 860px) {
        padding-left: 40px;
    }

    &:before {
        position: absolute;
        left: -1px;
        width: 5px;
        height: 100%;
        background-image: linear-gradient(#3877ee, #ef5da8);
        content: "";
    }

    pointer-events: none;
    position: relative;
    margin-top: 150px;
    padding-left: 80px;
    max-width: 400px;
    height: fit-content;
    color: ${colors["Black-blue"]};
    font-family: "PT Sans";
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 67.2px */
`;

const MainTitle: React.FC<ComponentWithChildren> = ({ children, ...props }) => {
    return <Title {...props}>{children}</Title>;
};

export default MainTitle;
