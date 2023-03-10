import { createRouter, createWebHistory } from "vue-router";

import FeedbackAdd from "./pages/feedbacks/FeedbackAdd.vue";
import FeedbackDetail from "./pages/feedbacks/FeedbackDetail.vue";
import FeedbackEdit from "./pages/feedbacks/FeedbackEdit.vue";
import FeedbackList from "./pages/feedbacks/FeedbackList.vue";
import StatusFeedbackList from "./pages/roadmap/StatusFeedbackList.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: FeedbackList,
    },
    {
      path: "/:id",
      component: FeedbackDetail,
    },
    {
      path: "/roadmap",
      component: StatusFeedbackList,
    },
    {
      path: "/add",
      component: FeedbackAdd,
    },
    {
      path: "/edit",
      component: FeedbackEdit,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
