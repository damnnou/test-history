import React, { useEffect, useState } from "react";
import Story from "../features/Story";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import type { StoriesSectionProps } from "../types/componentsProps";
import {
    fadeInSectionAnimation,
    fadeOutSectionAnimation,
} from "../styles/animations";

const Section = styled.section<{ hidden?: boolean }>`
    @media (max-width: 980px) {
        padding-right: 0px;
        padding-left: 0px;
    }

    @media (max-width: 820px) {
        order: 3;
        margin-top: 20px;
        margin-bottom: 0;
    }

    animation: ${(props) =>
            props.hidden ? fadeOutSectionAnimation : fadeInSectionAnimation}
        0.5s;
    opacity: ${(props) => (props.hidden ? 0 : 1)};
    visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
    display: flex;
    align-items: center;
    max-width: 1440px;
    height: fit-content;
    overflow: hidden;
    justify-content: center;
    margin-top: 56px;
    margin-bottom: 50px;
    padding-right: 40px;
    padding-left: 40px;
`;

const Eclipse = styled.button<{ $visible?: boolean }>`
    @media (max-width: 980px) {
        display: none;
    }
    z-index: 100;

    visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
    margin: auto auto;
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    background-color: #fff;
    filter: drop-shadow(0px 0px 15px rgba(56, 119, 238, 0.1));
    border: none;
    border-radius: 50%;
    color: ${colors.Blue};
`;

const StoriesSection: React.FC<StoriesSectionProps> = ({
    isLoading,
    stories,
    swiper,
    setSwiper,
    setSwiperActiveIndex,
}) => {
    const [prevButton, setPrevButton] = useState<boolean>(false);
    const [nextButton, setNextButton] = useState<boolean>(true);

    const handleSlideChange = () => {
        if (!swiper) return;
        const activeIndex = swiper.activeIndex;
        const slidesPerView = swiper.slidesPerViewDynamic();

        if (activeIndex + slidesPerView === stories.length) {
            setNextButton(false);
        } else {
            setNextButton(true);
        }

        if (activeIndex > 0) {
            setPrevButton(true);
        } else {
            setPrevButton(false);
        }

        setSwiperActiveIndex(activeIndex);
    };

    const handleReset = () => {
        if (swiper) {
            swiper.slideReset(500);
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

    useEffect(() => {
        handleReset();
        handleSlideChange();
        // eslint-disable-next-line
    }, [stories]);

    return (
        <>
            {stories.length > 0 && (
                <Section hidden={isLoading}>
                    <Eclipse onClick={handlePrevClick} $visible={prevButton}>
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
                            <path
                                d="M1 1L6 6L1 11"
                                stroke="#3877EE"
                                strokeWidth="2"
                            />
                        </svg>
                    </Eclipse>
                    <Swiper
                        mousewheel={true}
                        pagination={true}
                        modules={[Mousewheel, Pagination]}
                        spaceBetween={40}
                        onSwiper={setSwiper}
                        onSlideChange={handleSlideChange}
                        breakpoints={{
                            1280: {
                                slidesPerView: 3,
                            },

                            620: {
                                slidesPerView: 2,
                            },

                            100: {
                                slidesPerView: 1.5,
                            },
                        }}
                    >
                        {stories.map((slideContent, index) => (
                            <SwiperSlide
                                key={slideContent.id}
                                virtualIndex={index}
                            >
                                <Story
                                    year={slideContent.year}
                                    description={slideContent.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Eclipse onClick={handleNextClick} $visible={nextButton}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="12"
                            viewBox="0 0 8 12"
                            fill="none"
                        >
                            <path
                                d="M1 1L6 6L1 11"
                                stroke="#3877EE"
                                strokeWidth="2"
                            />
                        </svg>
                    </Eclipse>
                </Section>
            )}
        </>
    );
};

export default StoriesSection;
