
export const PayMethod = {
    CARD: 1,
    CASH: 2,
}

export const Message =  {
    CONTRACT_PRICE: 'договорная, с вами свяжутся после оформления заявки'
};

export const Price = {
    perHour: {
        LOADER: {
            normal: 350,
            hard: 400
        },
        HANDYMAN: {
            digger: 425,
            plasterer: 450,
            decorator: 425,
            other: 425
        },
        MOVING: {
            van: 600,
            flatbed: 850,
            lorry2: 950,
            lorry3: 1150,
            lorry4: Message.CONTRACT_PRICE
        },
        TOOLS: 50,
        OUR_FOR_LOADERS: 50,
        OUR_FOR_HANDYMEN: 75,
        OUR_FOR_DRIVERS: 100
    },
    perDay: {
        LOADER: {
            normal: 2700,
            hard: 3100
        },
        HANDYMAN: {
            digger: 3200,
            plasterer: 3400,
            decorator: 3200,
            other: 3200
        },
    }
}