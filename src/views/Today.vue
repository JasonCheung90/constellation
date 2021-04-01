<template>
  <div class="container">TodayPage</div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import getData from "@/services/index";

export default {
  name: "TodayPage",
  setup() {
    const state = reactive({
      count: 0,
    });
    const store = useStore();
    onMounted(() => {
      getData(store);
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
