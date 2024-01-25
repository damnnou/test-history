import React from "react";
import styled from "styled-components";
import { StoriesSectionProps } from "../types/componentsProps";
import { colors } from "../styles/colors";

const PaginationBlockWrapper = styled.div`
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PaginationDot = styled.div<{ active?: boolean }>`
    width: 6px;
    height: 6px;
    margin: 0 5px;
    background-color: ${(props) =>
        props.active ? colors["Black-blue"] : "#C4C4C4"};
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in-out 0.35s;
`;

const PaginationBlock: React.FC<StoriesSectionProps> = ({
    swiper,
    stories,
}) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleMoveTo = (index: number) => {
        if (swiper) {
            swiper.slideTo(index);
            setActiveIndex(swiper.activeIndex);
        }
    };

    return (
        <PaginationBlockWrapper>
            {stories.map((slideContent, index) => (
                <PaginationDot
                    key={slideContent.id}
                    active={activeIndex === index}
                    onClick={() => handleMoveTo(index)}
                />
            ))}
        </PaginationBlockWrapper>
    );
};

export default PaginationBlock;
