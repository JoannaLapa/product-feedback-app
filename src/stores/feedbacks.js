import { defineStore } from "pinia";
import getFeedbacks from "@/api/getFeedbacks";

export const FETCH_FEEDBACKS = "FETCH_FEEDBACKS";
export const COUNTED_STATUS_MAP = "COUNTED_STATUS_MAP";

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
  },
});
