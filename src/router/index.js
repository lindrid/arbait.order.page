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
		component: () => import('@/views/Services/Order/Actions.vue'),
		props: true
	},
	{
		name: 'ServiceCategoryActions',
		path: '/:service/:category/actions',
		component: () => import('@/views/Services/Order/Actions.vue'),
		props: true
	},


	{
		name: 'HandymanCategories',
		path: '/handyman/categories',
		component: () => import('@/views/Services/Handyman/Categories.vue'),
		props: true
	},
	{
		name: 'MovingCategories',
		path: '/moving/categories',
		component: () => import('@/views/Services/Moving/Categories.vue'),
		props: true
	},


	{
		path: '/form/loader',
		component: () => import('@/views/Services/Order/Form/Loader.vue')
	},
	{
		path: '/form/loader/:appId',
		component: () => import('@/views/Services/Order/Form/Loader.vue'),
		props: true
	},

	{
		path: '/form/handyman/digger',
		component: () => import('@/views/Services/Order/Form/Handyman/Digger.vue')
	},
	{
		path: '/form/handyman/digger/:appId',
		component: () => import('@/views/Services/Order/Form/Handyman/Digger.vue'),
		props: true
	},
	{
		path: '/form/handyman/plasterer',
		component: () => import('@/views/Services/Order/Form/Handyman/Plasterer.vue'),
		props: true
	},
	{
		path: '/form/handyman/plasterer/:appId',
		component: () => import('@/views/Services/Order/Form/Handyman/Plasterer.vue'),
		props: true
	},
	{
		path: '/form/handyman/decorator',
		component: () => import('@/views/Services/Order/Form/Handyman/Decorator.vue')
	},
	{
		path: '/form/handyman/decorator/:appId',
		component: () => import('@/views/Services/Order/Form/Handyman/Decorator.vue'),
		props: true
	},
	{
		path: '/form/handyman/other',
		component: () => import('@/views/Services/Order/Form/Handyman/Other.vue'),
		props: true
	},
	{
		path: '/form/handyman/other/:appId',
		component: () => import('@/views/Services/Order/Form/Handyman/Other.vue'),
		props: true
	},

	{
		path: '/history/:service',
		component: () => import('@/views/Services/Order/History.vue'),
		props: true
	},
	{
		path: '/history/:service/:category',
		component: () => import('@/views/Services/Order/History.vue'),
		props: true
	},

	{
		name: 'InfoLoader',
		path: '/info/loader',
		component: () => import('@/views/Services/Order/Information/Loader.vue')
	},

	{
		name: 'InfoMoving',
		path: '/info/moving',
		component: () => import('@/views/Services/Order/Information/Moving.vue')
	},
	{
		path: '/info/moving/:category',
		component: () => import('@/views/Services/Order/Information/Moving.vue'),
		props: true
	},

	{
		name: 'InfoTrash',
		path: '/info/trash',
		component: () => import('@/views/Services/Order/Information/Trash.vue')
	},

	{
		path: '/info/handyman/digger',
		component: () => import('@/views/Services/Order/Information/Handyman.vue')
	},
	{
		path: '/info/handyman/plasterer',
		component: () => import('@/views/Services/Order/Information/Handyman.vue')
	},
	{
		path: '/info/handyman/decorator',
		component: () => import('@/views/Services/Order/Information/Handyman.vue')
	},
	{
		path: '/info/handyman/other',
		component: () => import('@/views/Services/Order/Information/Handyman.vue')
	},


	{
		name: 'Finish',
		path: '/form/finish',
		component: () => import('@/views/Services/Order/Form/Finish.vue')
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
