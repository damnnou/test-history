import { Ref } from "react";
import type { HistoryItem } from "./historyItem";

export interface CircleButtonProps {
    width?: number;
    height?: number;
    value?: string | number;
    degree?: number;
    disabled?: boolean;
    animated?: boolean;
    selected?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    reference?: Ref<HTMLDivElement>;
}

export interface StoryProps {
    year: number;
    description: string;
}

export interface YearTitleProps {
    color?: string;
    children: number;
}

export interface YearsCounterProps {
    fromYear: number;
    toYear: number;
}

export interface ComponentWithChildren {
    children: React.ReactNode;
}

export interface StoriesSectionProps {
    stories: HistoryItem[];
}
