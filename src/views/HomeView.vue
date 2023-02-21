<template>
  <div class="page_wrap">
    <div class="container">
      <about-comp />
      <people-fti-comp />
      <departments-comp />
    </div>
  </div>
</template>

<script>
import AboutComp from "@/components/AboutComp";
import PeopleFtiComp from "@/components/PeopleFtiComp";
import DepartmentsComp from "@/components/DepartmentsComp";

export default {
  name: "HomeView",
  components: { AboutComp, PeopleFtiComp, DepartmentsComp },
};
</script>

<style lang="scss" scoped></style>
