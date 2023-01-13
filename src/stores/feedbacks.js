import { defineStore } from "pinia";
import getFeedbacks from "@/api/getFeedbacks";
import { useUserStore } from "./user";

export const FETCH_FEEDBACKS = "FETCH_FEEDBACKS";
export const COUNTED_STATUS_MAP = "COUNTED_STATUS_MAP";
export const FILTERED_FEEDBACKS = "FILTERED_FEEDBACKS";
export const INCLUDE_FEEDBACK_BY_CATEGORY = "INCLUDE_FEEDBACK_BY_CATEGORY";
export const UNIQUE_CATEGORIES = "UNIQUE_CATEGORIES";

export const useFeedbacksStore = defineStore("feedbacks", {
  state: () => ({
    feedbacks: [],
  }),
  actions: {
    async [FETCH_FEEDBACKS]() {
      const feedbacks = await getFeedbacks();
      this.feedbacks = feedbacks;
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
    //returns boolean if feedback.category is the selected category
    [INCLUDE_FEEDBACK_BY_CATEGORY]: () => (feedback) => {
      const userStore = useUserStore();
      return userStore.selectedCategories.includes(feedback.category);
    },
    [FILTERED_FEEDBACKS](state) {
      return state.feedbacks.filter((feedback) =>
        this.INCLUDE_FEEDBACK_BY_CATEGORY(feedback)
      );
    },
    [UNIQUE_CATEGORIES](state) {
      const uniqueCategories = new Set();
      state.feedbacks.forEach((feedback) =>
        uniqueCategories.add(feedback.category)
      );
      uniqueCategories.forEach((category) =>
        category.replace(category[0], category[0].toUpperCase())
      );
      uniqueCategories.add("All");
      return uniqueCategories;
    },
  },
});
