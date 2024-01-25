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

    @media (max-width: 720px) {
        font-size: 140px;
    }

    @media (max-width: 660px) {
        font-size: 130px;
    }

    @media (max-width: 620px) {
        font-size: 120px;
    }

    @media (max-width: 580px) {
        font-size: 110px;
    }

    @media (max-width: 520px) {
        font-size: 100px;
    }

    @media (max-width: 480px) {
        font-size: 90px;
    }

    @media (max-width: 440px) {
        font-size: 80px;
    }

    @media (max-width: 400px) {
        font-size: 70px;
    }

    @media (max-width: 380px) {
        font-size: 60px;
    }

    @media (max-width: 320px) {
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -1.12px;
    }

    @media (max-height: 720px) {
        margin-top: 26px;
        margin-bottom: 0px;
    }

    color: ${(props) => props.color ?? "#5D5FEF"};

    transition: ease-in-out 0.35s;
    margin: 56px 0;
    height: fit-content;
    width: fit-content;
    text-align: center;
    font-family: "PT Sans";
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -4px;
`;

const YearTitle: React.FC<YearTitleProps> = ({ children, ...props }) => {
    return <Year {...props}>{children}</Year>;
};

export default YearTitle;
