import { defineStore } from "pinia";

export const ADD_SELECTED_CATEGORY = "ADD_SELECTED_CATEGORY";
export const ADD_SELECTED_SORTING_CATEGORY = "ADD_SELECTED_SORTING_CATEGORY";
export const useUserStore = defineStore("user", {
  state: () => ({
    selectedCategories: [{ id: 0, name: "All" }],
    selectedSortingCategory: [
      { id: 1, name: "Most Upvotes", unavailable: false },
    ],
  }),
  actions: {
    [ADD_SELECTED_CATEGORY](category) {
      this.selectedCategories = category;
    },
    [ADD_SELECTED_SORTING_CATEGORY](sortingCategory) {
      this.selectedSortingCategory = sortingCategory;
    },
  },
});
