<template>
  <div class="container">TodayPage</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "TodayPage",
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
