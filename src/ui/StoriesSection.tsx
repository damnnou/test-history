import React, { useState } from "react";
import Story from "../features/Story.tsx";
import styled from "styled-components";
import { colors } from "../styles/colors.ts";
import history from "../api/history.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import type { StoriesSectionProps } from "../types/componentsProps.ts";

const Section = styled.section`
    display: flex;
    align-items: center;
    max-width: 1440px;
    overflow: hidden;
    justify-content: space-between;
    margin-top: 56px;
    padding-right: 40px;
    padding-left: 40px;
`;

const Eclipse = styled.button<{ visible: boolean }>`
    z-index: 100;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    margin: auto 0px;
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    background-color: #fff;
    filter: drop-shadow(0px 0px 15px rgba(56, 119, 238, 0.1));
    border: none;
    border-radius: 50%;
    color: ${colors.Blue};
`;

const StoriesSection: React.FC<StoriesSectionProps> = ({ stories }) => {
    const [swiper, setSwiper] = useState(null);
    const [prevButton, setPrevButton] = useState<boolean>(false);
    const [nextButton, setNextButton] = useState<boolean>(true);

    const handleSlideChange = () => {
        const activeIndex = swiper.activeIndex;
        const slidesPerView = 3;

        if (activeIndex + slidesPerView === history.history.length) {
            setNextButton(false);
        } else {
            setNextButton(true);
        }

        if (activeIndex > 0) {
            setPrevButton(true);
        } else {
            setPrevButton(false);
        }
    };

    const handlePrevClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    return (
        <Section>
            <Eclipse onClick={handlePrevClick} visible={prevButton}>
                <svg
                    style={{
                        transform: "scale(-1, 1)",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                >
                    <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
                </svg>
            </Eclipse>
            <Swiper
                style={{}}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                slidesPerView={3}
                spaceBetween={40}
                onSwiper={setSwiper}
                onSlideChange={handleSlideChange}
            >
                {stories ? (
                    stories.map((slideContent, index) => (
                        <SwiperSlide key={slideContent.id} virtualIndex={index}>
                            <Story
                                year={slideContent.year}
                                description={slideContent.description}
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide key={0} virtualIndex={0}>
                        "loading..."
                    </SwiperSlide>
                )}
            </Swiper>
            <Eclipse onClick={handleNextClick} visible={nextButton}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                >
                    <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
                </svg>
            </Eclipse>
        </Section>
    );
};

export default StoriesSection;
