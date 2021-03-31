<template>
  <div class="container">WeekPage</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "WeekPage",
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
