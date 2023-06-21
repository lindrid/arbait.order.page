// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToMain = (router) => '/';

/**
 *
 * @type TBackRouteFn
 */
const backToServiceActions = (params) => {
    return '/' + params.service + '/actions';
}

/**
 *
 * @type TBackRouteFn
 */
const backToServiceCategoryActions = (params) => {
    return '/' + params.service + '/' + params.category + '/actions';
}

/************************* Loader *************************/

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToLoaderActions = (params) => '/loader/actions';

/************************* Handyman *************************/

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
const backToHandymanCategories = (params) => '/categories/handyman';

/**
 *
 * @type TBackRouteFn
 */
const backToHandymanHistory = (params) => {
    return '/history' + '/handyman/' + params.category;
}

/************************* Moving *************************/

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToMovingCategories = (params) => '/categories/moving';

// noinspection JSUnusedLocalSymbols
/**
 *
 * @type TBackRouteFn
 */
const backToMovingActions = (params) => '/moving/actions';

/**
 *
 * @type TBackRouteFn
 */
const backToMovingHistory = (params) => '/history/moving';

/**
 *
 * @type TBackRouteFn
 */
const backToMovingCategoriesHistory = (params) => {
    return '/categories/moving/' + params.appId
};

/**
 *
 * @type TBackRouteFn
 */
const backToMovingWorkers = (params) => {
    return '/moving/' + params.category + '/workers';
};

/**
 *
 * @type TBackRouteFn
 */
const backToMovingWorkersHistory = (params) => {
    return '/moving/' + params.category + '/workers/' + params.appId
};

/************************* Trash *************************/

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
    history: {
        service: backToServiceActions,
        service_category: backToServiceCategoryActions
    },

    loader: {
        form: backToLoaderActions,
        info: backToLoaderActions
    },
    handyman: {
        categories: backToMain,
        form: backToHandymanActions,
        form_from_history: backToHandymanHistory,
        info: backToHandymanActions,
    },
    moving: {
        categories: backToMovingActions,
        workers: backToMovingCategories,
        categories_from_history: backToMovingHistory,
        workers_from_history: backToMovingCategoriesHistory,
        form: backToMovingWorkers,
        form_from_history: backToMovingWorkersHistory,
        info: backToMovingActions,
    },
    trash: {
        trucks: backToTrashCategories,
        categories: backToTrashActions,
        workers: backToTrashTrucks,
        form: {
            first: backToTrashWorkers,
            second: backToTrashForm,
        },
        info: backToTrashActions,
    }
}