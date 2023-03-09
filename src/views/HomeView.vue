<template>
  <div class="page_wrap">
    <about-comp @scrollTo="scrollToElement" />
    <div ref="people-fti"></div>
    <people-fti-comp />
    <div ref="departments"></div>
    <departments-comp />
    <div ref="partners"></div>
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
  methods: {
    scrollToElement(index) {
      switch (index) {
        case 0:
          window.scrollTo({
            top: this.$refs["people-fti"].offsetTop - 90,
            behavior: "smooth",
          });
          break;
        case 1:
          window.scrollTo({
            top: this.$refs["departments"].offsetTop - 100,
            behavior: "smooth",
          });
          break;
        case 2:
          window.scrollTo({
            top: this.$refs["partners"].offsetTop - 100,
            behavior: "smooth",
          });
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
