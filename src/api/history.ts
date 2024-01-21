const history = [
    {
        id: 0,
        year: 2015,
        category: "Наука",
        description:
            "13 сентября - частное солнечное затмение, видимое в Южной африке и части Антарктиды",
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
        id: 2,
        year: 2018,
        category: "Наука",
        description:
            "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
    },
    {
        id: 2,
        year: 2019,
        category: "Наука",
        description:
            "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
    },
    {
        id: 2,
        year: 2020,
        category: "Наука",
        description:
            "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
    },
    {
        id: 2,
        year: 2022,
        category: "Наука",
        description:
            "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
    },
];

const getHistory = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(history);
        }, 1000);
    });
};

export default { getHistory, history };
