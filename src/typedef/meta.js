import { Router } from "vue-router";

/**
 * Функция возвращает текстовую ссылку на предыдущую страницу,
 * в зависимости от текущей страницы и ее параметров
 * (таких как service, category и т/д)
 *
 * @typedef {Function} TBackRouteFn
 * @param {Router} router
 *
 * @returns {string}
 */


/**
 * @typedef {Object} TMeta - Мета рута
 *
 * @property {TBackRouteFn} backFn - Лямбда-функция для получения обратного рута
 * (или адреса предыдущей страницы)
 */