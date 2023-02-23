import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    selectedCategories: [{ id: 0, name: "All" }],
    upvotedFeedback: "",
    selectedSortingCategory: [
      { id: 1, name: "Most Upvotes", unavailable: false },
    ],
    assignedCategory: { id: 5, name: "Feature" },
    createdFeedback: {},
  }),
  actions: {
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
    addNewFeedback(feedback) {
      this.createdFeedback = feedback;
    },
  },
});
