import React from "react";
import Story from "../features/Story.tsx";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";
import history from "../api/history.ts";

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 80px;
    margin-top: 56px;
    margin-right: 40px;
    gap: 80px;
`;

const Eclipse = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin: auto 0;
    width: 40px;
    height: 40px;
    background-color: #fff;
    filter: drop-shadow(0px 0px 15px rgba(56, 119, 238, 0.1));
    border: none;
    border-radius: 50%;
    color: ${colors.Blue};
`;

const StoriesSection = () => {
    return (
        <Section>
            {history.history.map((story) => (
                <Story year={story.year} description={story.description} />
            ))}
            <Eclipse>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                >
                    <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
                </svg>
            </Eclipse>
        </Section>
    );
};

export default StoriesSection;
