import { createRouter, createWebHistory } from 'vue-router';
import MainContent from "@/components/MainContent.vue";
// import Page3Dashboard from "@/components/Page3Dashboard.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path : '/',
      component : MainContent
    },
  ]
})

export default router
