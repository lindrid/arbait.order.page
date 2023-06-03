import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import {BackRouteFunctions} from "@/services/back_routes";

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home,
	},
	{
		name: 'ServiceActions',
		path: '/:service/actions',
		component: () => import('@/views/Services/Actions.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.actions.service
		}
	},
	{
		name: 'ServiceCategoryActions',
		path: '/:service/:category/actions',
		component: () => import('@/views/Services/Actions.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.actions.service_category
		}
	},
	{
		path: '/history/:service',
		component: () => import('@/views/Services/History.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.history.service
		}
	},
	{
		path: '/history/:service/:category',
		component: () => import('@/views/Services/History.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.history.service_category
		}
	},

	/*************** Loader ***************/
	{
		path: '/form/loader',
		component: () => import('@/views/Services/Loader/Form.vue'),
		meta: {
			backFn: BackRouteFunctions.form.loader
		}
	},
	{
		path: '/form/loader/:appId',
		component: () => import('@/views/Services/Loader/Form.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.form.loader
		}
	},
	{
		name: 'InfoLoader',
		path: '/info/loader',
		component: () => import('@/views/Services/Loader/Information.vue'),
		meta: {
			backFn: BackRouteFunctions.info.loader
		}
	},

	/*************** Handyman ***************/
	{
		name: 'HandymanCategories',
		path: '/categories/handyman',
		component: () => import('@/views/Services/Handyman/Categories.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.categories.handyman
		}
	},
	{
		path: '/form/handyman/:category',
		component: () => import('@/views/Services/Handyman/Form.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.form.handyman
		}
	},
	{
		path: '/form/handyman/:category/:appId',
		component: () => import('@/views/Services/Handyman/Form.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.form.from_history.handyman
		}
	},
	{
		path: '/info/handyman/digger',
		component: () => import('@/views/Services/Handyman/Information.vue')
	},
	{
		path: '/info/handyman/plasterer',
		component: () => import('@/views/Services/Handyman/Information.vue')
	},
	{
		path: '/info/handyman/decorator',
		component: () => import('@/views/Services/Handyman/Information.vue')
	},
	{
		path: '/info/handyman/other',
		component: () => import('@/views/Services/Handyman/Information.vue')
	},

	/*************** Moving ***************/
	{
		path: '/categories/moving',
		component: () => import('@/views/Services/Moving/Categories.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.categories.moving
		}
	},
	{
		path: '/categories/moving/:appId',
		component: () => import('@/views/Services/Moving/Categories.vue'),
		props: true
	},
	{
		path: '/moving/:category/workers',
		component: () => import('@/views/Services/Moving/Workers.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.workers.moving
		}
	},
	{
		path: '/moving/:category/workers/:appId',
		component: () => import('@/views/Services/Moving/Workers.vue'),
		props: true
	},
	{
		path: '/form/moving/:category/:workers',
		name: 'FormMovingWorkers',
		component: () => import('@/views/Services/Moving/Form/First.vue'),
		props: true
	},
	{
		name: 'FormMovingWorkersAppId',
		path: '/form/moving/:category/:workers/:appId',
		component: () => import('@/views/Services/Moving/Form/First.vue'),
		props: true
	},
	{
		name: 'MovingSecondForm',
		path: '/form/moving/second/:category/',
		component: () => import('@/views/Services/Moving/Form/Second.vue'),
		props: true
	},
	{
		name: 'InfoMoving',
		path: '/info/moving',
		component: () => import('@/views/Services/Moving/Information.vue'),
		meta: {
			backFn: BackRouteFunctions.info.moving
		}
	},
	{
		path: '/info/moving/:category',
		component: () => import('@/views/Services/Moving/Information.vue'),
		props: true,
		meta: {
			backFn: BackRouteFunctions.info.moving
		}
	},

	/*************** Trash ***************/
	{
		name: 'TrashCategories',
		path: '/categories/trash',
		component: () => import('@/views/Services/Trash/Categories.vue')
	},
	{
		path: '/categories/trash/:appId',
		component: () => import('@/views/Services/Trash/Categories.vue'),
		props: true
	},
	{
		path: '/trash/:category/trucks',
		component: () => import('@/views/Services/Trash/Trucks.vue'),
		props: true
	},
	{
		path: '/trash/:category/trucks/:appId',
		component: () => import('@/views/Services/Trash/Trucks.vue'),
		props: true
	},
	{
		path: '/trash/:category/:truck',
		component: () => import('@/views/Services/Trash/Workers.vue'),
		props: true
	},
	{
		path: '/trash/:category/:truck/:appId',
		component: () => import('@/views/Services/Trash/Workers.vue'),
		props: true
	},
	{
		path: '/form/trash/:category/:truck/:workers',
		component: () => import('@/views/Services/Trash/Form/First.vue'),
		props: true
	},
	{
		path: '/form/trash/:category/:truck/:workers/:appId',
		component: () => import('@/views/Services/Trash/Form/First.vue'),
		props: true
	},
	{
		path: '/form/trash/second',
		component: () => import('@/views/Services/Trash/Form/Second.vue'),
		props: true
	},
	{
		path: '/info/trash',
		component: () => import('@/views/Services/Trash/Information.vue'),
		meta: {
			backFn: BackRouteFunctions.info.trash
		}
	},

	/*************** Finish ***************/
	{
		name: 'Finish',
		path: '/form/finish',
		component: () => import('@/views/Services/Finish.vue')
	},
	{
		name: 'About',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'Gallery',
		path: '/gallery',
		component: () => import('@/views/Gallery.vue'),
	},
	{
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	},
	{
		path: '/blank/:category',
		component: () => import('@/views/Blank.vue'),
		props: true
	},
	{
		path: '/blank/:category/:category2',
		component: () => import('@/views/Blank.vue'),
		props: true
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
