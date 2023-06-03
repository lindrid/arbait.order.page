import {BackRoutes} from "@/consts/back_routes";

/**
 *
 * @type TBackRouteFn
 */
const actionsBackRoute = (router) =>
    BackRoutes.actions[router.currentRoute.value.params.service];

/**
 *
 * @type TBackRouteFn
 */
const backToMain = (router) => BackRoutes.main;

/**
 *
 * @type TBackRouteFn
 */
const backToHandymanCategories = (router) =>
    BackRoutes.actions.category.handyman;

/**
 *
 * @type TBackRouteFn
 */
const backToMovingCategories = (router) => BackRoutes.categories.moving

/**
 *
 * @type TBackRouteFn
 */
const loaderFormBackRoute = (router) => BackRoutes.form.loader;

/**
 *
 * @type TBackRouteFn
 */
const backToActions = (router) =>
    BackRoutes.history[router.currentRoute.value.params.service];

/**
 *
 * @type TBackRouteFn
 */
const backToHandymanActions = (router) =>
    BackRoutes.form.handyman[router.currentRoute.value.params.category];

/**
 *
 * @type TBackRouteFn
 */
const backToMovingActions = (router) => BackRoutes.categories.moving;

/**
 *
 * @type TBackRouteFn
 */
const backToTrashActions = (router) => BackRoutes.info.trash;

/**
 *
 * @type TBackRouteFn
 */
const backToHandymanHistory = (router) =>
    BackRoutes.form.from_history.handyman[router.currentRoute.value.params.category];

// noinspection JSValidateJSDoc
export const BackRouteFunctions = {
    backToMain: backToMain,
    actions: {
        service: actionsBackRoute,
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
        trash: backToTrashActions,
    }
}