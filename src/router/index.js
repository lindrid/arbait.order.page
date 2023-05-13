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
		name: 'HandymanCategories',
		path: '/categories/handyman',
		component: () => import('@/views/Services/Handyman/Categories.vue'),
		props: true
	},
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
		path: '/form/loader',
		component: () => import('@/views/Services/Loader/Form.vue')
	},
	{
		path: '/form/loader/:appId',
		component: () => import('@/views/Services/Loader/Form.vue'),
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
		component: () => import('@/views/Services/Moving/Form/First.vue'),
		props: true
	},
	{
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
		path: '/history/:service',
		component: () => import('@/views/Services/History.vue'),
		props: true
	},
	{
		path: '/history/:service/:category',
		component: () => import('@/views/Services/History.vue'),
		props: true
	},

	{
		name: 'InfoLoader',
		path: '/info/loader',
		component: () => import('@/views/Services/Loader/Information.vue')
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

	{
		name: 'InfoTrash',
		path: '/info/trash',
		component: () => import('@/views/Services/Trash/Trash.vue')
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
		name: 'Blank',
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
