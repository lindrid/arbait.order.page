
/**
 * @type {TTrashCategory[]}
 */
export const TrashCategories = {
    construct: {
        val: 0,
        name: "Строительный",
        route: 'construct',
        formLabel: 'строительного мусора'
    },
    household: {
        val: 1,
        name: "Бытовой: мебель, техника",
        route: 'household',
        formLabel: 'бытового мусора'
    },
    collect: {
        val: 2,
        name: "Сборный",
        route: 'collect',
        formLabel: 'сборного мусора'
    },
}

export const TrashTrucks = {
    truck3: {
        val: 0,
        name: "Самосвал до 3т<br>до 6 кубов",
        route: 'truck3',
    },
    truck5: {
        val: 1,
        name: "Самосвал до 5т<br>до 10 кубов",
        route: 'truck5',
    },
}