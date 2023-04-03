import { defineStore } from "pinia";
import getUser from "@/api/getUser";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: {},
    selectedCategories: [{ id: 0, name: "All" }],
    upvotedFeedback: "",
    selectedSortingCategory: [
      { id: 1, name: "Most Upvotes", unavailable: false },
    ],

    assignedCategory: { id: 5, name: "Feature" },
    assignedStatus: {},
    createdFeedback: {},
    createdComment: {},
    createdReply: {},
  }),

  actions: {
    async fetchCurrentUser() {
      try {
        const currentUser = await getUser();
        this.currentUser = currentUser;
      } catch (err) {
        err instanceof Error
          ? console.log(`The error: ${err.message}`)
          : console.log("Something went wrong");
      }
    },

    addSelectedCategory(category) {
      this.selectedCategories = category;
    },

    addUpvotedFeedback(upvotedFeedback) {
      this.upvotedFeedback = upvotedFeedback;
    },

    addSelectedSortingCategory(sortingCategory) {
      if (sortingCategory) {
        this.selectedSortingCategory = sortingCategory;
      }
    },

    assignCategory(category) {
      if (category) {
        this.assignedCategory = category;
      } else {
        this.assignedCategory = { id: 5, name: "Feature" };
      }
    },

    assignStatus(status) {
      if (status) {
        this.assignedStatus = status;
      } else {
        this.assignedStatus = { id: 1, name: "Suggestion", unavailable: false };
      }
    },

    addNewFeedback(feedback) {
      this.createdFeedback = feedback;
    },

    addNewComment(comment) {
      this.createdComment = comment;
    },

    addNewReply(reply) {
      this.createdReply = reply;
    },
  },
});
