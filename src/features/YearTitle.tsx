import React from "react";
import styled from "styled-components";
import type { YearTitleProps } from "../types/componentsProps";

const Year = styled.h1<YearTitleProps>`
    @media (max-width: 980px) {
        font-size: 180px;
    }

    @media (max-width: 860px) {
        font-size: 150px;
    }

    color: ${(props) => props.color ?? "#5D5FEF"};

    margin: 0 0;
    height: fit-content;
    width: fit-content;
    text-align: center;
    font-family: "PT Sans";
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    line-height: 160px; /* 80% */
    letter-spacing: -4px;
`;

const YearTitle: React.FC<YearTitleProps> = ({ children, ...props }) => {
    return <Year {...props}>{children}</Year>;
};

export default YearTitle;
