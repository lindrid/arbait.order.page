import {BackRoutes} from "@/consts/back_routes";

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToMain = (router) => '/';

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToHandymanCategories = (params) => '/categories/handyman';

/**
 *
 * @type TBackRouteFn
 */
const backToHandymanHistory = (router) =>
    BackRoutes.form.from_history.handyman[router.currentRoute.value.params.category];

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToMovingCategories = (params) => '/moving/actions';

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const loaderFormBackRoute = (params) => '/loader/actions';

/**
 *
 * @type TBackRouteFn
 */
const backToActions = (params) => {
    return params.service + '/actions';
}

/**
 *
 * @type TBackRouteFn
 */
const backToHandymanActions = (params) => {
    return '/handyman/' + params.category + '/actions';
}

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToMovingActions = (params) => '/moving/actions';

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToTrashActions = (params) => '/trash/actions';

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToTrashCategories = (params) => '/categories/trash';

/**
 *
 * @type TBackRouteFn
 */
const backToTrashTrucks = (params) => {
    return '/trash/' + params.category + '/trucks';
}

/**
 *
 * @type TBackRouteFn
 */
const backToTrashWorkers = (params) => {
    return '/trash/' + params.category + '/' + params.truck;
}

/**
 *
 * @type TBackRouteFn
 */
const backToTrashForm = (params) => {
    return backToTrashWorkers(params) + '/' + params.workers;
}


// noinspection JSValidateJSDoc
export const BackRouteFunctions = {
    backToMain: backToMain,
    actions: {
        service: backToMain,
        service_category: backToHandymanCategories
    },
    categories: {
        handyman: backToMain,
        moving: backToMovingActions,
    },
    workers: {
        moving: backToMovingCategories
    },
    history: {
        service: backToActions,
        service_category: backToMain
    },
    form: {
        loader: loaderFormBackRoute,
        handyman: backToHandymanActions,
        from_history: {
            handyman: backToHandymanHistory
        }
    },
    info: {
        loader: loaderFormBackRoute,
        handyman: backToHandymanActions,
        moving: backToMovingActions,
    },

    trash: {
        trucks: backToTrashCategories,
        categories: backToTrashActions,
        info: backToTrashActions,
        workers: backToTrashTrucks,
        form: {
            first: backToTrashWorkers,
            second: backToTrashForm,
        },
    }
}