import { defineStore } from "pinia";
import getFeedbacks from "@/api/getFeedbacks";
import { useUserStore } from "./user";

//Ola suggestion: it depends (as always), but I'm used to using lower case in components and upper case in stores or in variables f.e const uniqueCategories = ...
export const FETCH_FEEDBACKS = "FETCH_FEEDBACKS";
export const COUNTED_STATUS_MAP = "COUNTED_STATUS_MAP";
export const FILTERED_FEEDBACKS = "FILTERED_FEEDBACKS";
export const INCLUDE_FEEDBACK_BY_CATEGORY = "INCLUDE_FEEDBACK_BY_CATEGORY";
export const SORTED_FEEDBACKS = "SORTED_FEEDBACKS";
export const INCLUDE_UPVOTED_FEEDBACK = "INCLUDE_UPVOTED_FEEDBACK";
export const INCREASE_UPVOTES = "INCREASE_UPVOTES";

export const useFeedbacksStore = defineStore("feedbacks", {
  state: () => {
    return {
      feedbacks: [],
      uniqueCategories: [
        { id: 0, name: "All" },
        { id: 1, name: "UX" },
        { id: 2, name: "UI" },
        { id: 3, name: "Enhancement" },
        { id: 4, name: "Bug" },
        { id: 5, name: "Feature" },
      ],
      options: [
        { id: 1, name: "Most Upvotes", unavailable: false },
        { id: 2, name: "Least Upvotes", unavailable: false },
        { id: 3, name: "Most Comments", unavailable: false },
        { id: 4, name: "Least Comments", unavailable: false },
      ],
    };
  },
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
    [INCREASE_UPVOTES]() {
      const feedbackToUpvote = this.feedbacks.find((feedback) =>
        this.INCLUDE_UPVOTED_FEEDBACK(feedback)
      );
      if (feedbackToUpvote === undefined) {
        return;
      } else {
        feedbackToUpvote.upvotes++;
        return feedbackToUpvote.upvotes;
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
    //if the feedback.category is empty I return all feedbacks - idea for the future improvement - maybe better is to make this button disabled
    //filtering feedbacks when the user clicks on the button with category
    [FILTERED_FEEDBACKS](state) {
      const filteredFeedbacks = state.feedbacks.filter((feedback) =>
        this.INCLUDE_FEEDBACK_BY_CATEGORY(feedback)
      );
      return filteredFeedbacks.length === 0
        ? state.feedbacks
        : filteredFeedbacks;
    },
    //sorting feedbacks when the user chooses a sorting category - default Most Upvotes
    [SORTED_FEEDBACKS]() {
      const userStore = useUserStore();
      const filteredFeedbacks = this.FILTERED_FEEDBACKS;
      //sort by "Least Upvotes"
      if (userStore.selectedSortingCategory.id === 2) {
        return filteredFeedbacks.sort(
          (feedbackA, feedbackB) => feedbackA.upvotes - feedbackB.upvotes
        );
        //sort by "Most Comments", if there is any comment return 0 else return the length of comments array
      } else if (userStore.selectedSortingCategory.id === 3) {
        return filteredFeedbacks.sort(
          (feedbackA, feedbackB) =>
            (feedbackB.comments ? feedbackB.comments.length : 0) -
            (feedbackA.comments ? feedbackA.comments.length : 0)
        );
        //sort by "Least Comments", if there is any comment return 0 else return the length of comments array
      } else if (userStore.selectedSortingCategory.id === 4) {
        return filteredFeedbacks.sort(
          (feedbackA, feedbackB) =>
            (feedbackA.comments ? feedbackA.comments.length : 0) -
            (feedbackB.comments ? feedbackB.comments.length : 0)
        );
        //sort by "Most Upvotes"
      } else {
        return filteredFeedbacks.sort(
          (feedbackA, feedbackB) => feedbackB.upvotes - feedbackA.upvotes
        );
      }
    },
    [INCLUDE_UPVOTED_FEEDBACK]: () => (feedback) => {
      const userStore = useUserStore();
      const upvotedFeedback = userStore.upvotedFeedback;
      return upvotedFeedback.id === feedback.id;
    },
  },
});
