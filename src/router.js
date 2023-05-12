import { createRouter, createWebHistory } from "vue-router";

const FeedbackDetail = () => import("./pages/feedbacks/FeedbackDetail.vue");
const FeedbackAddEdit = () => import("./pages/feedbacks/FeedbackAddEdit.vue");
const StatusFeedbackList = () => import("./pages/StatusFeedbackList.vue");
const FeedbackList = () => import("./pages/feedbacks/FeedbackList.vue");
const NotFound = () => import("./pages/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "FeedbackList",
      component: FeedbackList,
    },

    {
      path: "/roadmap",
      name: "StatusFeedbackList",
      component: StatusFeedbackList,
    },

    {
      path: "/add",
      name: "add",
      component: FeedbackAddEdit,
      props: true,
    },

    {
      path: "/:id",
      component: FeedbackDetail,
      props: true,
    },

    {
      path: "/edit/:id",
      name: "edit",
      component: FeedbackAddEdit,
      props: true,
    },

    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
