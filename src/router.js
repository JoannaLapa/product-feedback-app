import { createRouter, createWebHistory } from "vue-router";

import FeedbackAdd from "./pages/feedbacks/FeedbackAdd.vue";
import FeedbackDetail from "./pages/feedbacks/FeedbackDetail.vue";
import FeedbackEdit from "./pages/feedbacks/FeedbackEdit.vue";
import FeedbackList from "./pages/feedbacks/FeedbackList.vue";
import StatusFeedbackList from "./pages/roadmap/StatusFeedbackList.vue";
import NotFOund from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/feedbacks",
    },
    {
      path: "/feedbacks",
      component: FeedbackList,
      children: [
        { path: "add", component: FeedbackAdd },
      ],
    },
    {
      path: "/feedbacks/:id",
      component: FeedbackDetail,
      children: [
        { path: "edit", component: FeedbackEdit }, //editing feedback
      ],
    },
    {
      path: "/roadmap",
      component: StatusFeedbackList,
      children: [
        { path: "add", component: FeedbackAdd },
      ],
    },
    {
      path: "/:notFound(.*)",
      component: NotFOund,
    },
  ],
});

export default router;
