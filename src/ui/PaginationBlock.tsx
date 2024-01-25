import React from "react";
import styled from "styled-components";
import { StoriesSectionProps } from "../types/componentsProps";
import { colors } from "../styles/colors";

const PaginationBlockWrapper = styled.div`
    @media (max-width: 820px) {
        position: absolute;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    display: none;
`;

const PaginationDot = styled.div<{ $active?: boolean }>`
    width: 6px;
    height: 6px;
    margin: 0 5px;
    background-color: ${(props) =>
        props.$active ? colors["Black-blue"] : "#C4C4C4"};
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in-out 0.35s;
`;

const PaginationBlock: React.FC<StoriesSectionProps> = ({
    swiper,
    stories,
    swiperActiveIndex,
    setSwiperActiveIndex,
}) => {
    const handleMoveTo = (index: number) => {
        if (swiper) {
            swiper.slideTo(index);
            setSwiperActiveIndex(swiper.activeIndex);
        }
    };

    return (
        <PaginationBlockWrapper>
            {stories.map((slideContent, index) => (
                <PaginationDot
                    key={slideContent.id}
                    $active={swiperActiveIndex === index}
                    onClick={() => handleMoveTo(index)}
                />
            ))}
        </PaginationBlockWrapper>
    );
};

export default PaginationBlock;
