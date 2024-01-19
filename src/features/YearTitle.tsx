import React from "react";
import styled from "styled-components";

interface YearTitleProps {
    color?: string;
    children: number;
}

const Year = styled.h1<{ color?: string }>`
    color: ${(props) => props.color ?? "#5D5FEF"};

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
