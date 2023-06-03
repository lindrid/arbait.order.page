export const BackRoutes = {
    main: '/',
    actions: {
        loader: '/',
        handyman: '/',
        moving: '/',
        trash: '/',

        category: {
            handyman: '/categories/handyman'
        }
    },
    categories: {
        handyman: '/',
        moving: '/moving/actions'
    },
    workers: {
        moving: '/categories/moving'
    },
    history: {
        loader: '/loader/actions',
        handyman: '/handyman/actions',
        moving: '/moving/actions',
        trash: '/trash/actions',
    },
    form: {
        loader: '/loader/actions',
        handyman: {
            digger: '/handyman/digger/actions',
            plasterer: '/handyman/plasterer/actions',
            decorator: '/handyman/decorator/actions',
            other: '/handyman/other/actions',
        },
        from_history: {
            handyman: {
                digger: '/history/handyman/digger',
                plasterer: '/history/handyman/plasterer',
                decorator: '/history/handyman/decorator',
                other: '/history/handyman/other',
            }
        }
    },
    info: {
        moving: '/moving/actions',
        trash: '/trash/actions'
    },

    trash: {
        trucks: {
            construct: '/trash/construct/trucks',
            household: '/trash/household/trucks',
            collect: '/trash/collect/trucks',
        }
    }
};