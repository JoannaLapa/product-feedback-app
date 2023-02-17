import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    selectedCategories: [{ id: 0, name: "All" }],
    upvotedFeedback: "",
    selectedSortingCategory: [
      { id: 1, name: "Most Upvotes", unavailable: false },
    ],
  }),
  actions: {
    addSelectedCategory(category) {
      this.selectedCategories = category;
    },
    addUpvotedFeedback(upvotedFeedback) {
      this.upvotedFeedback = upvotedFeedback;
    },
    addSelectedSortingCategory(sortingCategory) {
      this.selectedSortingCategory = sortingCategory;
    },
  },
});
