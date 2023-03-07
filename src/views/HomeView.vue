<template>
  <div class="page_wrap">
    <about-comp />
    <people-fti-comp />
    <departments-comp />
    <partners-comp />
  </div>
</template>

<script>
import AboutComp from "@/components/AboutComp";
import PeopleFtiComp from "@/components/PeopleFtiComp";
import DepartmentsComp from "@/components/DepartmentsComp";
import PartnersComp from "@/components/PartnersComp";

export default {
  name: "HomeView",
  components: {
    AboutComp,
    PeopleFtiComp,
    DepartmentsComp,
    PartnersComp,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
