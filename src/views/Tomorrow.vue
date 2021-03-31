<template>
  <div class="container">TomorrowPage</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "TomorrowPage",
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
