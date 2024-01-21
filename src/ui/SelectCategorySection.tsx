import React from "react";
import styled from "styled-components";
import CircleButton from "../features/CircleButton.tsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 393px;
    margin-left: 80px;
    gap: 10px;

    width: fit-content;
    height: fit-content;
`;

const RowContainer = styled.div`
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

const SelectCategorySection: React.FC = () => {
    return (
        <Container>
            <SmallText>06/06</SmallText>
            <RowContainer>
                <CircleButton>{"<"}</CircleButton>
                <CircleButton disabled>{">"}</CircleButton>
            </RowContainer>
        </Container>
    );
};

export default SelectCategorySection;
