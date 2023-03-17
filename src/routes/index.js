import { createRouter, createWebHistory } from 'vue-router';
import { HomeView, PokedexView, DetailsView } from '../views';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  }, {
    path: '/pokedex',
    name: 'PokedexView',
    component: PokedexView
  }, {
    path: '/details/:pokename',
    name: 'DetailsView',
    component: DetailsView
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }]
});

export default routes;
