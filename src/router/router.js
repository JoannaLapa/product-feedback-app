import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", redirect: '/feedbacks',
      component: null,
    },
    {
      path: "/feedbacks",
      component: null,
    },
    {
      path: "/feedbacks/:id",
      component: null,
      children: [
        {path: 'add', component: null},
        {path:'edit', component: null} //editing feedback
      ]
    },
    {
      path: "/roadmap",
      component: null,
    },
    {
      path: "/:notFound(.*)",
      component: null,
    }
  ],
});

export default router;
