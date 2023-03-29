import { defineStore } from "pinia";
import getFeedbacks from "@/api/getFeedbacks";
import { useUserStore } from "./user";

export const useFeedbacksStore = defineStore("feedbacks", {
  state: () => {
    return {
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
    };
  },
  actions: {
    async fetchFeedbacks() {
      if (JSON.parse(localStorage.getItem("feedbacks"))) {
        this.feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
      } else {
        try {
          const feedbacks = await getFeedbacks();
          this.feedbacks = feedbacks;
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
      return this.feedbacks.push(userStore.createdFeedback);
    },
    updateCommentsList(id) {
      const userStore = useUserStore();
      return this.feedbacks[id].comments.push(userStore.createdComment);
    },
    //calculate a number of comments (including replies)
    commentsNumber(feedback) {
      if (!feedback.comments) {
        return 0;
      } else {
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
    countedStatusMap() {
      const statusNumbers = new Map();
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
      statusNumbers
        .set("Planned", plannedNumber)
        .set("In-progress", inProgressNumber)
        .set("Live", liveNumber);

      return statusNumbers;
    },
    //if the feedback.category is empty I return all feedbacks - idea for the future improvement - maybe better is to make this button disabled
    //filtering feedbacks when the user clicks on the button with category
    filteredFeedbacksList() {
      const userStore = useUserStore();
      const filteredFeedbacks = this.feedbacks.filter(
        (feedback) => userStore.selectedCategories.name === feedback.category
      );
      return filteredFeedbacks.length === 0
        ? this.feedbacks
        : filteredFeedbacks;
    },
    //sorting feedbacks when the user chooses a sorting category - default Most Upvotes
    sortedFeedbacksList() {
      const userStore = useUserStore();
      const filteredFeedbacks = this.filteredFeedbacksList;
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
    //return the feedback clicked by the user
    upvotedFeedback() {
      const userStore = useUserStore();
      const upvotedFeedback = userStore.upvotedFeedback;
      const feedbackToUpvote = this.feedbacks.find(
        (feedback) => upvotedFeedback.id === feedback.id
      );
      return feedbackToUpvote;
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
