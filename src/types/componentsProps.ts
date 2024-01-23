import { Ref, RefObject } from "react";
import type { HistoryItem, CategoryObject } from "./variablesProps";

interface MainCircleProps {
    isLoading: boolean;
    categoriesList: CategoryObject[];
    onRotate: (
        categoryId: number,
        reference1: RefObject<HTMLDivElement>,
        reference2: RefObject<HTMLDivElement>
    ) => void;
    selectedCategory: number;
    circleRef: RefObject<HTMLDivElement>;
    circleButtonRef: RefObject<HTMLDivElement>;
}

interface CircleButtonProps {
    width: number;
    height: number;
    value: string | number;
    degree: number;
    disabled: boolean;
    $animated: boolean;
    selected: boolean;
    children: React.ReactNode;
    style: React.CSSProperties;
    reference: RefObject<HTMLDivElement>;
    onClick: () => void;
}

type PartialCircleButtonProps = Partial<CircleButtonProps>;

interface SelectCategorySectionProps {
    selectedCategory: number;
    onChangeCategory: (id: number) => void;
}

interface StoryProps {
    year: number;
    description: string;
}

interface YearTitleProps {
    color?: string;
    children: number;
}

interface YearsCounterProps {
    fromYear: number;
    toYear: number;
}

interface ComponentWithChildren {
    children: React.ReactNode;
}

interface StoriesSectionProps {
    stories: HistoryItem[];
    isLoading: boolean;
}

export type {
    MainCircleProps,
    CircleButtonProps,
    PartialCircleButtonProps,
    StoryProps,
    YearTitleProps,
    YearsCounterProps,
    ComponentWithChildren,
    StoriesSectionProps,
    SelectCategorySectionProps,
};
