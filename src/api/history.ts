import type { HistoryItem } from "../types/historyItem";

const history: HistoryItem[] = [
    {
        id: 0,
        year: 2015,
        category: "Наука",
        description:
            "13 сентября - частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
    },
    {
        id: 1,
        year: 2016,
        category: "Наука",
        description:
            "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
    },
    {
        id: 2,
        year: 2017,
        category: "Наука",
        description:
            "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
    },
    {
        id: 3,
        year: 2018,
        category: "Наука",
        description:
            "Запущен космический телескоп James Webb, следующее поколение после телескопа «Хаббл»",
    },
    {
        id: 4,
        year: 2019,
        category: "Наука",
        description:
            "Объявлено о первом измерении массы черной дыры - M87* - с использованием события блеска волны",
    },
    {
        id: 5,
        year: 2020,
        category: "Наука",
        description:
            "SpaceX отправила первый коммерческий экипаж на МКС в рамках миссии Crew Dragon Demo-2",
    },
    {
        id: 6,
        year: 2022,
        category: "Наука",
        description:
            "Первые успешные испытания квантового компьютера суперпроводникового трансмона",
    },
];

const getHistory = async () => {
    return new Promise<HistoryItem[]>((resolve) => {
        setTimeout(() => {
            resolve(history);
        }, 1000);
    });
};

export default { getHistory, history };
