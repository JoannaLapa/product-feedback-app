import { defineStore } from "pinia";

export const ADD_SELECTED_CATEGORY = "ADD_SELECTED_CATEGORY";
export const ADD_SELECTED_SORTING_CATEGORY = "ADD_SELECTED_SORTING_CATEGORY";
export const COUNT_UPVOTES = "COUNT_UPVOTES";
export const useUserStore = defineStore("user", {
  state: () => ({
    selectedCategories: [{ id: 0, name: "All" }],
    upvotes: "",
    selectedSortingCategory: [
      { id: 1, name: "Most Upvotes", unavailable: false },
    ],
  }),
  actions: {
    [ADD_SELECTED_CATEGORY](category) {
      this.selectedCategories = category;
    },
    [COUNT_UPVOTES](upvotes) {
      this.upvotes = upvotes;
    },
    [ADD_SELECTED_SORTING_CATEGORY](sortingCategory) {
      this.selectedSortingCategory = sortingCategory;
    },
  },
});
