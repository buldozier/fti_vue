<template>
  <div class="page-wrap">
    <about-comp @scrollTo="scrollToElement" />
    <div ref="people-fti"></div>
    <people-fti-comp />
    <div ref="departments"></div>
    <departments-slider-comp />
    <div ref="partners"></div>
    <partners-comp />
  </div>
</template>

<script>
import AboutComp from "@/components/HomeAbout";
import PeopleFtiComp from "@/components/HomePeopleFti";
import DepartmentsSliderComp from "@/components/HomeDepartmentsSlider";
import PartnersComp from "@/components/HomePartners";

export default {
  name: "HomeView",
  components: {
    AboutComp,
    PeopleFtiComp,
    DepartmentsSliderComp,
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
