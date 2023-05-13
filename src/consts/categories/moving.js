
/**
 * @type {TMovingCategory[]}
 */
export const MovingCategories = {
    van: {
        val: 0,
        name: "Микроавтобус",
        route: 'van',
        formLabel: 'микроавтобус'
    },
    flatbed: {
        val: 1,
        name: "Открытый бортовик <br> (длина до 3м)",
        route: 'flatbed',
        formLabel: 'открытый борт'
    },
    lorry2: {
        val: 2,
        name: "Закрытая будка до 2т <br> (1.9м / 2м / 3м)",
        route: 'lorry2',
        formLabel: 'будку до 2т'
    },
    lorry3: {
        val: 3,
        name: "Закрытая будка от 2 до 3т <br> (2.1м / 2м / 4м)",
        route: 'lorry3',
        formLabel: 'будку до 3т'
    },
    lorry4: {
        val: 4,
        name: "Будка более 4т",
        route: 'lorry4',
        formLabel: 'будку более 4т'
    },
}