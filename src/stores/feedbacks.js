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
    [INCLUDE_FEEDBACK_BY_CATEGORY]: () => (feedback) => {
      const userStore = useUserStore();
      if (userStore.selectedCategories.length === 0) return true;
      if (userStore.selectedCategories === "All") return true;
      return userStore.selectedCategories
        .toLowerCase()
        .includes(feedback.category);
    },
    [FILTERED_FEEDBACKS](state) {
      const filteredFeedbacks = state.feedbacks.filter((feedback) =>
        this.INCLUDE_FEEDBACK_BY_CATEGORY(feedback)
      );
      if (filteredFeedbacks.length === 0) return state.feedbacks;
      return state.feedbacks.filter((feedback) =>
        this.INCLUDE_FEEDBACK_BY_CATEGORY(feedback)
      );
    },
    //I added this getter as a set, but I finally consider if this is needed cause anyway I have to hardcode categories (if there would be any feedback with the category)
    [UNIQUE_CATEGORIES](state) {
      const uniqueCategories = new Set([
        "All",
        "UX",
        "UI",
        "Feature",
        "Enhancement",
        "Bug",
      ]);
      state.feedbacks.forEach((feedback) =>
        uniqueCategories.add(
          feedback.category.charAt(0).toUpperCase() + feedback.category.slice(1)
        )
      );
      return uniqueCategories;
    },
  },
});
