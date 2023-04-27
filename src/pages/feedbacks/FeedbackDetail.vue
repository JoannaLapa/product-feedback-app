<!-- Future todo
1) Comments List: Desktop styles: padding on reply comments  
-->
<template>
  <main class="flex justify-center">
    <BaseWrapper variant="tertiary">
      <BaseBar variant="neutral">
        <GoBack />

        <BaseButton
          tag="router-link"
          :to="`/edit/${Number(route.params.id)}`"
          text="Edit Feedback"
          type=""
          variant="secondary"
        />
      </BaseBar>
      <FeedbackItem :feedback="feedback" :number="Number(route.params.id)" />

      <BaseBox variant="secondary">
        <h2 class="text-lg font-bold text-neutral-500">
          <span>{{ commentsNumber }}</span>
          {{ commentsNumber === 1 ? "Comment" : "Comments" }}
        </h2>

        <div>
          <ul class="divide-neutral-700/15 divide-y">
            <CommentItem
              v-for="comment in feedback.comments"
              :id="comment.id"
              :key="comment.id"
              :name="comment.user.name"
              :user-name="comment.user.username"
              :content="comment.content"
              :src="`${comment.user.image.slice(8)}`"
              variant="primary"
              post-comment
            >
              <ul
                v-if="comment.replies"
                class="relative flex flex-col gap-6 divide-neutral-400/10 pl-6 before:absolute before:left-0 before:h-4/6 before:border-l before:border-neutral-400 before:opacity-10 sm:col-span-full"
              >
                <CommentItem
                  v-for="reply in comment.replies"
                  :id="comment.id"
                  :key="reply.content"
                  :name="reply.user.name"
                  :user-name="reply.user.username"
                  :content="reply.content"
                  :src="`${reply.user.image.slice(8)}`"
                  reply
                  post-comment
                  :reply-to="`@${reply.replyingTo} `"
                >
                </CommentItem>
              </ul>
            </CommentItem>
          </ul>
        </div>
      </BaseBox>

      <AddComment variant="flex-col" />
    </BaseWrapper>
  </main>
</template>

<script setup>
import { computed, ref, provide } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import { useUserStore } from "../../stores/user.js";
import { useRoute } from "vue-router";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import BaseBox from "../../components/basicComponents/BaseBox.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import BaseBar from "../../components/basicComponents/BaseBar.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import AddComment from "../../components/comments/AddComment.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
import CommentItem from "../../components/comments/CommentItem.vue";

const feedbacksStore = useFeedbacksStore();
const userStore = useUserStore();
const route = useRoute();

feedbacksStore.fetchFeedbacks();
userStore.fetchCurrentUser();

const feedbacks = computed(() => feedbacksStore.sortedFeedbacksList);
const feedback = ref(feedbacks.value[Number(route.params.id)]);

const commentsNumber = computed(() =>
  feedbacksStore.commentsNumber(feedback.value)
);

const newCommentId = computed(() => {
  if (feedback.value.comments) {
    return feedback.value.comments.length + 1;
  } else {
    return 1;
  }
});

const currentUser = computed(() => {
  return userStore.currentUser;
});

const updateCommentsList = (content) => {
  userStore.addNewComment({
    id: newCommentId,
    content: content,
    user: {
      image: currentUser.value.image,
      name: currentUser.value.name,
      username: currentUser.value.username,
    },
  });
  feedbacksStore.updateCommentsList(Number(route.params.id));
  console.log(currentUser.value);
  document.getElementById("comment").value = "";
};
provide("updateCommentsList", updateCommentsList);

const baseBoxVariant = ref("primary");
provide("baseBoxVariant", baseBoxVariant);

const primaryButtonText = "Post Comment";
provide("primaryButtonText", primaryButtonText);
</script>
