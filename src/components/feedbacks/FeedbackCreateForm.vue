<!-- Future todo - after implementing correctly BaseSelect verify spacing and element hight again -->
<!-- Local Storage should be corrected - there shouldn't be added each time full list of feedbacks -->
<!-- Form validation -->

<template>
  <form
    class="-mt-3 flex flex-col gap-10 p-6 pt-0 sm:-mt-12 sm:p-10.5"
    @submit.prevent="updateFeedbackList"
  >
    <fieldset class="flex flex-col gap-6">
      <div>
        <legend class="pb-4 text-lg font-bold text-neutral-500 sm:text-2xl">
          {{
            routeName === "add"
              ? "Create New Feedback"
              : `Editing '${state.newFeedbackTitle}'`
          }}
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
          v-model="state.newFeedbackTitle"
          type="text"
          aria-describedby="feedback-title-instruction"
          class="mt-4 h-12 w-full cursor-pointer rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 sm:p-6"
        />
      </div>

      <p v-if="newFeedbackTitle === ''" class="text-xs text-primary-300">
        Can't be empty
      </p>

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
          :option-name="categoryName"
          :action="usersStore.assignCategory"
        />
      </div>

      <div v-if="routeName === 'edit'">
        <BaseLabel
          label-for="status"
          title="Category"
          id-title="update-status"
          description="Change feature state"
        />

        <BaseSelect
          id="status"
          aria-described-by="update-status"
          :options="status"
          :option-name="statusName"
          :action="usersStore.assignStatus"
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
          v-model="state.description"
          aria-describedby="feedback-details-instruction"
          name="feedback-detail"
          class="mt-4 h-30 w-full cursor-pointer resize-none rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 sm:h-24 sm:p-6"
        />

        <p
          v-show="useFeedbackStore.isEmptyDescription"
          class="text-xs text-primary-300"
        >
          Can't be empty
        </p>
      </div>
    </fieldset>

    <div class="flex flex-col gap-4 sm:flex-row-reverse sm:justify-between">
      <div class="flex flex-col gap-4 sm:flex-row-reverse">
        <BaseButton
          tag="button"
          variant="primary"
          :text="routeName === 'add' ? 'Add Feedback' : 'Save Changes'"
          type="button"
          @action="updateFeedbackList"
        />

        <BaseButton
          variant="dark"
          text="Cancel"
          type="button"
          @action="routeToFeedbackList"
        />
      </div>

      <BaseButton
        v-if="routeName === 'edit'"
        text="Delete"
        type="button"
        variant="danger"
        @action="deleteFeedback"
      />
    </div>
  </form>
</template>

<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
import BaseLabel from "../basicComponents/BaseLabel.vue";
import BaseSelect from "../basicComponents/BaseSelect.vue";
import { useFeedbacksStore } from "@/stores/feedbacks.js";
import { useUserStore } from "../../stores/user.js";
import { ref, reactive, computed, provide } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useString } from "../../use/useString";
// import { useVuelidate } from "@vuelidate/core";
// import { required } from "@vuelidate/validators";

const useFeedbackStore = useFeedbacksStore();
useFeedbackStore.fetchFeedbacks();
const usersStore = useUserStore();
const feedbacks = computed(() => useFeedbackStore.feedbacks);

const route = useRoute();
const routeName = route.name;
console.log(`Jestem w ${routeName}`);

const index = route.params.id ? Number(route.params.id) : 0;
console.log(`Numer indeksu ${index}`);

const { firstLetterToUpper } = useString();
const { changeToLowerCase } = useString();

const sortedFeedbacks = computed(() => useFeedbackStore.sortedFeedbacksList);

const state = reactive({
  description:
    routeName === "add" ? "" : sortedFeedbacks.value[index].description,
  newFeedbackTitle:
    routeName === "add" ? "" : sortedFeedbacks.value[index].title,
});

const router = useRouter();
const routeToFeedbackList = () => {
  router.push("/");
};

const options = computed(() => useFeedbackStore.uniqueCategories);
const status = computed(() => useFeedbackStore.status);

const categoryName = ref("");
categoryName.value =
  routeName === "add"
    ? useFeedbackStore.categoryFeature.name
    : firstLetterToUpper(sortedFeedbacks.value[index].category);

const statusName = ref("");
statusName.value = firstLetterToUpper(sortedFeedbacks.value[index].status);

const feedbackID = sortedFeedbacks.value[index].id;

const updateFeedbackList = () => {
  if (routeName === "add") {
    usersStore.addNewFeedback({
      id: feedbacks.value.length + 1,
      title: state.newFeedbackTitle,
      category: changeToLowerCase(usersStore.assignedCategory.name),
      upvotes: 0,
      status: usersStore.assignedStatus.name.toLowerCase(),
      description: state.description,
    });
    useFeedbackStore.updateFeedbackList();
  } else {
    useFeedbackStore.updateFeedbackValue(
      feedbackID,
      state.newFeedbackTitle,
      state.description
    );
  }
  router.push("/");
};

const deleteFeedback = () => {
  useFeedbackStore.deleteFeedback(feedbackID);
  router.push("/");
};

const variant = "wide";
provide("variant", variant);

const listBoxOptionsVariant = "wide";
provide("listBoxOptionsVariant", listBoxOptionsVariant);
</script>
