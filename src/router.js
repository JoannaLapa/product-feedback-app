import { createRouter, createWebHistory } from "vue-router";

// import FeedbackDetail from "./pages/feedbacks/FeedbackDetail.vue";
import FeedbackAddEdit from "./pages/feedbacks/FeedbackAddEdit.vue";
import FeedbackList from "./pages/feedbacks/FeedbackList.vue";
import StatusFeedbackList from "./pages/StatusFeedbackList.vue";
import NotFound from "./pages/NotFound.vue";

const FeedbackDetail2 = () => import("./pages/feedbacks/FeedbackDetail2.vue");

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: FeedbackList,
    },

    {
      path: "/roadmap",
      component: StatusFeedbackList,
    },

    {
      path: "/add",
      name: "add",
      component: FeedbackAddEdit,
    },

    {
      path: "/:id",
      component: FeedbackDetail2,
    },

    {
      path: "/edit/:id",
      name: "edit",
      component: FeedbackAddEdit,
    },

    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
