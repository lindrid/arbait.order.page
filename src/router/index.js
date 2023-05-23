import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'ServiceActions',
		path: '/:service/actions',
		component: () => import('@/views/Services/Actions.vue'),
		props: true
	},
	{
		name: 'ServiceCategoryActions',
		path: '/:service/:category/actions',
		component: () => import('@/views/Services/Actions.vue'),
		props: true
	},
	{
		path: '/history/:service',
		component: () => import('@/views/Services/History.vue'),
		props: true
	},
	{
		path: '/history/:service/:category',
		component: () => import('@/views/Services/History.vue'),
		props: true
	},

	/*************** Loader ***************/
	{
		path: '/form/loader',
		component: () => import('@/views/Services/Loader/Form.vue')
	},
	{
		path: '/form/loader/:appId',
		component: () => import('@/views/Services/Loader/Form.vue'),
		props: true
	},
	{
		name: 'InfoLoader',
		path: '/info/loader',
		component: () => import('@/views/Services/Loader/Information.vue')
	},

	/*************** Handyman ***************/
	{
		name: 'HandymanCategories',
		path: '/categories/handyman',
		component: () => import('@/views/Services/Handyman/Categories.vue'),
		props: true
	},
	{
		path: '/form/handyman/:category',
		component: () => import('@/views/Services/Handyman/Form.vue'),
		props: true
	},
	{
		path: '/form/handyman/:category/:appId',
		component: () => import('@/views/Services/Handyman/Form.vue'),
		props: true
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
		props: true
	},
	{
		path: '/categories/moving/:appId',
		component: () => import('@/views/Services/Moving/Categories.vue'),
		props: true
	},
	{
		path: '/moving/:category/workers',
		component: () => import('@/views/Services/Moving/Workers.vue'),
		props: true
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
		component: () => import('@/views/Services/Moving/Information.vue')
	},
	{
		path: '/info/moving/:category',
		component: () => import('@/views/Services/Moving/Information.vue'),
		props: true
	},

	/*************** Trash ***************/
	{
		path: '/categories/trash',
		component: () => import('@/views/Services/Trash/Categories.vue'),
		props: true
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
		component: () => import('@/views/Services/Trash/Information.vue')
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
