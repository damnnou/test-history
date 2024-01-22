export interface HistoryItem {
    id: number;
    year: number;
    category: string;
    description: string;
}

export interface CategoryObject {
    id: number;
    name: string;
    styles: React.CSSProperties;
    degree: number;
}
