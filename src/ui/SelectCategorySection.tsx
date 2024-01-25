import React from "react";
import styled from "styled-components";
import CircleButton from "../features/CircleButton";
import { SelectCategorySectionProps } from "../types/componentsProps";

const Container = styled.div`
    @media (max-width: 860px) {
        margin-left: 40px;
    }

    @media (max-width: 720px) {
        margin-left: 20px;
    }

    @media (max-width: 820px) {
        order: 4;
        margin-top: auto;
        margin-bottom: 20px;
        gap: 0px;
    }

    display: flex;
    flex-direction: column;
    margin-top: 393px;
    margin-left: 80px;
    gap: 10px;
    width: fit-content;
    height: fit-content;
`;

const RowContainer = styled.div`
    @media (max-width: 420px) {
        gap: 10px;
    }
    display: flex;
    gap: 20px;
`;

const SmallText = styled.p`
    color: #42567a;
    font-family: "PT Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SelectCategorySection: React.FC<SelectCategorySectionProps> = ({
    selectedCategory,
    onChangeCategory,
}) => {
    return (
        <Container>
            <SmallText>
                {"0"}
                {selectedCategory}
                {"/06"}
            </SmallText>
            <RowContainer>
                <CircleButton
                    disabled={selectedCategory <= 1}
                    onClick={() =>
                        selectedCategory > 1 &&
                        onChangeCategory(selectedCategory - 1)
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 25 26"
                        fill="none"
                    >
                        <path
                            d="M13.7489 10.0418L10.6239 13.1668L13.7489 16.2918"
                            stroke="#42567A"
                            strokeWidth="2"
                        />
                    </svg>
                </CircleButton>
                <CircleButton
                    onClick={() =>
                        selectedCategory < 6 &&
                        onChangeCategory(selectedCategory + 1)
                    }
                    disabled={selectedCategory === 6}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 26 26"
                        fill="none"
                    >
                        <path
                            d="M11.5839 10.0418L14.7089 13.1668L11.5839 16.2918"
                            stroke="#42567A"
                            strokeWidth="2"
                        />
                    </svg>
                </CircleButton>
            </RowContainer>
        </Container>
    );
};

export default SelectCategorySection;
