interface HistoryItem {
    id: number;
    year: number;
    category: string;
    description: string;
}

interface CategoryObject {
    id: number;
    name: string;
    styles: React.CSSProperties;
    degree: number;
}

export type { HistoryItem, CategoryObject };
