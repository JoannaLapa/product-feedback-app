import { defineStore } from "pinia";
import getFeedbacks from "@/api/getFeedbacks";
import { useUserStore } from "./user";

export const FETCH_FEEDBACKS = "FETCH_FEEDBACKS";
export const COUNTED_STATUS_MAP = "COUNTED_STATUS_MAP";
export const FILTERED_FEEDBACKS = "FILTERED_FEEDBACKS";
export const INCLUDE_FEEDBACK_BY_CATEGORY = "INCLUDE_FEEDBACK_BY_CATEGORY";

export const useFeedbacksStore = defineStore("feedbacks", {
  state: () => ({
    feedbacks: [],
    uniqueCategories: [
      { id: 0, name: "All" },
      { id: 1, name: "UX" },
      { id: 2, name: "UI" },
      { id: 3, name: "Feature" },
      { id: 4, name: "Enhancement" },
      { id: 5, name: "Bug" },
    ],
  }),
  actions: {
    async [FETCH_FEEDBACKS]() {
      try {
        const feedbacks = await getFeedbacks();
        this.feedbacks = feedbacks;
      } catch (err) {
        err instanceof Error
          ? console.log(`The error: ${err.message}`)
          : console.log("Something went wrong");
      }
    },
  },
  getters: {
    [COUNTED_STATUS_MAP](state) {
      const statusNumbers = new Map();
      //counting how many feedbacks are dependly on status value
      const plannedNumber = state.feedbacks.filter(
        (feedback) => feedback.status === "planned"
      ).length;
      const inProgressNumber = state.feedbacks.filter(
        (feedback) => feedback.status === "in-progress"
      ).length;
      const liveNumber = state.feedbacks.filter(
        (feedback) => feedback.status === "live"
      ).length;
      //map with status names as a key and status quantity as a value
      statusNumbers
        .set("Planned", plannedNumber)
        .set("In-progress", inProgressNumber)
        .set("Live", liveNumber);

      return statusNumbers;
    },
    //userStore.selectedCategories includes the value added when button is clicked. With code below I check if this value is the same like feedback.category.
    [INCLUDE_FEEDBACK_BY_CATEGORY]: () => (feedback) => {
      const userStore = useUserStore();
      if (userStore.selectedCategories.id === 0) return true;
      return userStore.selectedCategories.name === feedback.category;
    },
    //if the feedback.category is empty I return all feedbacks - I suppose that I should pront some modal window to show thet there is any feedback at this category?
    [FILTERED_FEEDBACKS](state) {
      const filteredFeedbacks = state.feedbacks.filter((feedback) =>
        this.INCLUDE_FEEDBACK_BY_CATEGORY(feedback)
      );
      return filteredFeedbacks.length === 0
        ? state.feedbacks
        : filteredFeedbacks;
    },
  },
});
