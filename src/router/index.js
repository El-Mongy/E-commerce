import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rentomojo/src/views/Package.vue',
    name: 'Package',
    component: Package
  },
  {
    path: '/rentomojo/src/views/Furniture.vue',
    name: 'Furniture',
    component: Furniture
  },
  {
    path: '/rentomojo/src/views/Appliances.vue',
    name: 'Appliances',
    component: Appliances
  },
  {
    path: '/rentomojo/src/views/Electronics.vue',
    name: 'Electronics',
    component: Electronics
  },
  {
    path: '/rentomojo/src/views/Bikes.vue',
    name: 'Bikes',
    component: Bikes
  },
  {
    path: '/rentomojo/src/views/Baby.vue',
    name: 'Baby',
    component: Baby
  },
  {
    path: '/rentomojo/src/views/Fitness.vue',
    name: 'Fitness',
    component: Fitness
  }
]

import Package from '@/views/Package.vue';
import Furniture from '@/views/Furniture.vue';
import Appliances from '@/views/Appliances.vue';
import Electronics from '@/views/Electronics.vue';
import Bikes from '@/views/Bikes.vue';
import Baby from '@/views/Baby.vue';
import Fitness from '@/views/Fitness.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
