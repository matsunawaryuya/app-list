import { createWebHistory, createRouter } from "vue-router";
import Index from "../pages/Index.vue";
import Chess from "../pages/Chess/Index.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/chess',
    name: 'chess',
    component: Chess
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;