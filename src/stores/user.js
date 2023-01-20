import { defineStore } from "pinia";

export const ADD_SELECTED_CATEGORY = "ADD_SELECTED_CATEGORY";
export const useUserStore = defineStore("user", {
  state: () => ({
    selectedCategories: [{ id: 0, name: "All" }],
  }),
  actions: {
    [ADD_SELECTED_CATEGORY](category) {
      this.selectedCategories = category;
    },
  },
});
