<template>
  <div class="page_wrap">
    <div class="container">
      <about-comp />
      <people-fti-comp />
    </div>
  </div>
</template>

<script>
import AboutComp from "@/components/AboutComp";
import PeopleFtiComp from "@/components/PeopleFtiComp";
export default {
  name: "HomeView",
  components: { AboutComp, PeopleFtiComp },
};
</script>

<style lang="scss" scoped></style>
