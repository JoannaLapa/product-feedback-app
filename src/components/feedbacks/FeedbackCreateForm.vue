<!-- todo - after implementing correctly BaseSelect verify spacing and element hight again -->

<template>
  <form
    class="-mt-3 flex flex-col gap-10 p-6 pt-0 sm:-mt-12 sm:p-10.5"
    @submit.prevent="updateFeedbackList"
  >
    <fieldset class="flex flex-col gap-6">
      <div>
        <legend class="pb-4 text-lg font-bold text-neutral-500 sm:text-2xl">
          {{ title }}
        </legend>
      </div>
      <div>
        <BaseLabel
          label-for="feedback-title"
          title="Feedback Title"
          id-title="feedback-title-instruction"
          description="Add a short, descriptive headline"
        />
        <input
          id="feedback-title"
          v-model.trim="newFeedbackTitle"
          type="text"
          aria-describedby="feedback-title-instruction"
          class="mt-4 h-12 w-full cursor-pointer rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 sm:p-6"
        />
      </div>
      <div>
        <BaseLabel
          label-for="category"
          title="Category"
          id-title="category-instruction"
          description="Choose a category for your feedback"
        />
        <BaseSelect
          id="category"
          aria-described-by="category - instruction"
          :options="options"
          :action="usersStore.assignCategory"
        />
      </div>
      <div>
        <BaseLabel
          label-for="feedback-detail"
          title="Feedback Detail"
          id-title="feedback-details-instruction"
          description="Include any specific comments on what should be improved, added, etc."
        />
        <textarea
          id="feedback-detail"
          v-model.trim="newDescription"
          aria-describedby="feedback-details-instruction"
          name="feedback-detail"
          class="mt-4 h-30 w-full cursor-pointer resize-none rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 sm:h-24 sm:p-6"
        />
      </div>
    </fieldset>
    <div
      class="flex flex-col gap-4 sm:flex-row"
      :class="{ 'sm:justify-end': variant === 'add' }"
    >
      <div class="flex flex-col gap-4 sm:flex-row-reverse">
        <BaseButton
          variant="primary"
          text="Add Feedback"
          type="button"
          @action="
            updateFeedbackList({
              id: useFeedbackStore.feedbacks.length + 1,
              title: newFeedbackTitle,
              category: usersStore.assignedCategory.name,
              upvotes: 0,
              status: 'suggestion',
              description: newDescription,
            })
          "
        />
        <BaseButton variant="dark" text="Cancel" type="button" />
      </div>
      <BaseButton v-if="edit" text="Delete" type="button" />
    </div>
  </form>
</template>

<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
import BaseLabel from "../basicComponents/BaseLabel.vue";
import BaseSelect from "../basicComponents/BaseSelect.vue";
import { useFeedbacksStore } from "@/stores/feedbacks.js";
import { useUserStore } from "../../stores/user.js";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

defineProps({
  title: {
    type: String,
    required: true,
  },
  edit: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "",
    validation: (variant) => ["edit", "add"].includes(variant),
  },
});

const useFeedbackStore = useFeedbacksStore();
const usersStore = useUserStore();
const router = useRouter();
const newFeedbackTitle = ref("");
const newDescription = ref("");
const newFeedback = ref({});
const options = computed(() => useFeedbackStore.uniqueCategories);

const updateFeedbackList = (data) => {
  newFeedback.value = data;
  usersStore.addNewFeedback(newFeedback.value);
  useFeedbackStore.updateFeedbackList();
  localStorage.setItem("feedbacks", JSON.stringify(useFeedbackStore.feedbacks));
  router.push("/");
};
</script>
