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
    [INCLUDE_FEEDBACK_BY_CATEGORY]: () => (feedback) => {
      const userStore = useUserStore();
      return userStore.selectedCategories.includes(feedback.category);
    },
    [FILTERED_FEEDBACKS](state) {
      return state.feedbacks.filter((feedback) =>
        this.INCLUDE_FEEDBACK_BY_CATEGORY(feedback)
      );
    },
  },
});
