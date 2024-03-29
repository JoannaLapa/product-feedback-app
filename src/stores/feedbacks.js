import { defineStore } from "pinia";
import getFeedbacks from "@/api/getFeedbacks";
import { useUserStore } from "./user";
import { useString } from "../use/useString";

export const useFeedbacksStore = defineStore("feedbacks", {
  state: () => {
    return {
      isLoading: true,
      feedbacks: [],
      categoryAll: { id: 0, name: "All", unavailable: false },
      categoryUX: { id: 1, name: "UX", unavailable: false },
      categoryUI: { id: 2, name: "UI", unavailable: false },
      categoryEnhancement: { id: 3, name: "Enhancement", unavailable: false },
      categoryBug: { id: 4, name: "Bug", unavailable: false },
      categoryFeature: { id: 5, name: "Feature", unavailable: false },

      options: [
        { id: 1, name: "Most Upvotes", unavailable: false },
        { id: 2, name: "Least Upvotes", unavailable: false },
        { id: 3, name: "Most Comments", unavailable: false },
        { id: 4, name: "Least Comments", unavailable: false },
      ],

      status: [
        { id: 1, name: "Suggestion", unavailable: false },
        { id: 2, name: "Planned", unavailable: false },
        { id: 3, name: "In-Progress", unavailable: false },
        { id: 4, name: "Live", unavailable: false },
      ],
    };
  },

  actions: {
    async fetchFeedbacks() {
      if (JSON.parse(localStorage.getItem("feedbacks"))) {
        this.feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
        this.isLoading = false;
      } else {
        try {
          const feedbacks = await getFeedbacks();
          this.feedbacks = feedbacks;
          this.isLoading = false;
        } catch (err) {
          err instanceof Error
            ? console.log(`The error: ${err.message}`)
            : console.log("Something went wrong");
        }
      }
    },

    //increase the upvotes after click
    increaseUpvotes() {
      if (this.upvotedFeedback === undefined) {
        return;
      } else {
        this.upvotedFeedback.upvotes++;
        return this.upvotedFeedback.upvotes;
      }
    },

    updateFeedbackList() {
      const userStore = useUserStore();
      this.feedbacks.push(userStore.createdFeedback);
      localStorage.setItem("feedbacks", JSON.stringify(this.feedbacks));
      return this.feedbacks;
    },

    updateFeedbackValue(id, title, description) {
      const userStore = useUserStore();
      const { changeToLowerCase } = useString();

      const feedback = this.feedbacks.find((feedback) => feedback.id === id);
      feedback.title = title;
      feedback.description = description;

      const { name: categoryName } = userStore.assignedCategory;
      const { name: statusName } = userStore.assignedStatus;
      feedback.category = changeToLowerCase(categoryName);
      feedback.status = changeToLowerCase(statusName);

      localStorage.setItem("feedbacks", JSON.stringify(this.feedbacks));
      return feedback;
    },

    deleteFeedback(id) {
      const index = this.feedbacks.findIndex((feedback) => feedback.id === id);
      this.feedbacks.splice(index, 1);
      localStorage.setItem("feedbacks", JSON.stringify(this.feedbacks));
    },

    updateCommentsList(id) {
      const userStore = useUserStore();
      const { comments } = this.feedbacks[id];
      if (comments) {
        return this.feedbacks[id].comments.push(userStore.createdComment);
      } else {
        this.feedbacks[id].comments = [];
        return this.feedbacks[id].comments.push(userStore.createdComment);
      }
    },

    updateRepliesList(id, commentId) {
      const userStore = useUserStore();
      const index = this.feedbacks[id].comments.findIndex(
        (item) => item.id === commentId
      );
      const { replies } = this.feedbacks[id].comments[index];
      if (replies) {
        return replies.push(userStore.createdReply);
      } else {
        this.feedbacks[id].comments[index].replies = [];
        const { replies } = this.feedbacks[id].comments[index];
        return replies.push(userStore.createdReply);
      }
    },

    //calculate a number of comments (including replies)
    commentsNumber(feedback) {
      if (!feedback.comments) {
        console.log("Wszedłem tam gdzie nie ma komentarzy");
        return 0;
      } else {
        console.log("Wszedłem tam gdzie są komentarze");
        let includes = false;
        let count = 0;
        feedback.comments.forEach((comment) => {
          if (Object.keys(comment).includes("replies")) {
            includes = true;
            const { replies } = comment;
            count = count + replies.length;
            console.log(count);
          }
        });
        if (!includes) {
          return feedback.comments.length;
        } else {
          return count + feedback.comments.length;
        }
      }
    },
  },

  getters: {
    getFeedbacks() {
      return this.feedbacks;
    },
    countedStatusMap() {
      const statusNumbers = [];
      //counting how many feedbacks are dependly on status value
      const plannedNumber = this.feedbacks.filter(
        (feedback) => feedback.status === "planned"
      ).length;
      const inProgressNumber = this.feedbacks.filter(
        (feedback) => feedback.status === "in-progress"
      ).length;
      const liveNumber = this.feedbacks.filter(
        (feedback) => feedback.status === "live"
      ).length;

      //map with status names as a key and status quantity as a value
      statusNumbers.push(
        {
          name: "Planned",
          number: plannedNumber,
          description: "Ideas prioritized for research",
        },
        {
          name: "In-Progress",
          number: inProgressNumber,
          description: "Features currently being developed",
        },
        {
          name: "Live",
          number: liveNumber,
          description: "Released features",
        }
      );

      return statusNumbers;
    },

    //if the feedback.category is empty I return all feedbacks - idea for the future improvement - maybe better is to make this button disabled
    //filtering feedbacks when the user clicks on the button with category
    filteredFeedbacksList() {
      const userStore = useUserStore();
      const { name } = userStore.selectedCategories;
      const suggestionList = this.feedbacks.filter(
        (feedback) => feedback.status === "suggestion"
      );

      return name.toLowerCase() === "all"
        ? suggestionList
        : suggestionList.filter(
            (feedback) => name.toLowerCase() === feedback.category
          );
    },

    filteredByStatus() {
      return (status) => {
        this.feedbacks.filter((feedback) => feedback.status === status);
      };
    },

    //sorting feedbacks when the user chooses a sorting category - default Most Upvotes
    sortedFeedbacksList() {
      const userStore = useUserStore();
      const suggestionsList = this.filteredFeedbacksList.filter(
        (item) => item.status === "suggestion"
      );
      //sort by "Least Upvotes"
      if (userStore.selectedSortingCategory.id === 2) {
        return suggestionsList.sort(
          (feedbackA, feedbackB) => feedbackA.upvotes - feedbackB.upvotes
        );
        //sort by "Most Comments", if there is any comment return 0 else return the length of comments array
      } else if (userStore.selectedSortingCategory.id === 3) {
        return suggestionsList.sort(
          (feedbackA, feedbackB) =>
            (feedbackB.comments ? feedbackB.comments.length : 0) -
            (feedbackA.comments ? feedbackA.comments.length : 0)
        );
        //sort by "Least Comments", if there is any comment return 0 else return the length of comments array
      } else if (userStore.selectedSortingCategory.id === 4) {
        return suggestionsList.sort(
          (feedbackA, feedbackB) =>
            (feedbackA.comments ? feedbackA.comments.length : 0) -
            (feedbackB.comments ? feedbackB.comments.length : 0)
        );
        //sort by "Most Upvotes"
      } else {
        return suggestionsList.sort(
          (feedbackA, feedbackB) => feedbackB.upvotes - feedbackA.upvotes
        );
      }
    },

    getSuggestionsList() {
      const suggestionsList = this.sortedFeedbacksList.filter(
        (item) => item.status === "suggestion"
      );
      return suggestionsList;
    },

    //return the feedback clicked by the user
    upvotedFeedback() {
      const userStore = useUserStore();
      const upvotedFeedback = userStore.upvotedFeedback;
      const feedbackToUpvote = this.feedbacks.find(
        (feedback) => upvotedFeedback.id === feedback.id
      );
      return feedbackToUpvote;
    },

    getFeedbackDescription: (state) => {
      return (index) => {
        return state.feedbacks[index].description;
      };
    },

    getFeedbackTitle: (state) => {
      return (index) => {
        return state.feedbacks[index].title;
      };
    },

    getLoadingStatus() {
      return this.isLoading;
    },

    categories() {
      return [
        this.categoryAll,
        this.categoryUX,
        this.categoryUI,
        this.categoryEnhancement,
        this.categoryBug,
        this.categoryFeature,
      ];
    },

    uniqueCategories() {
      return [
        this.categoryFeature,
        this.categoryUI,
        this.categoryUX,
        this.categoryEnhancement,
        this.categoryBug,
      ];
    },
  },
});
