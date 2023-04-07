<template>
  <div class="page-wrap">
    <student-union-about-comp @scrollTo="scrollToElement" />
    <div ref="events"></div>
    <student-union-events-comp />
    <div ref="team"></div>
    <student-union-team />
    <student-union-commissions />
    <div ref="gallery"></div>
    <student-union-gallery />
    <div ref="info"></div>
    <student-union-info />
  </div>
</template>

<script>
import StudentUnionAboutComp from "@/components/StudentUnionAbout";
import StudentUnionEventsComp from "@/components/StudentUnionEvents";
import StudentUnionTeam from "@/components/StudentUnionTeam";
import StudentUnionCommissions from "@/components/StudentUnionCommissions";
import StudentUnionGallery from "@/components/StudentUnionGallery";
import StudentUnionInfo from "@/components/StudentUnionInfo";
export default {
  name: "StudentUnionView",
  components: {
    StudentUnionAboutComp,
    StudentUnionEventsComp,
    StudentUnionTeam,
    StudentUnionCommissions,
    StudentUnionGallery,
    StudentUnionInfo,
  },
  methods: {
    scrollToElement(index) {
      switch (index) {
        case 0:
          window.scrollTo({
            top: this.$refs["events"].offsetTop - 90,
            behavior: "smooth",
          });
          break;
        case 1:
          window.scrollTo({
            top: this.$refs["team"].offsetTop - 100,
            behavior: "smooth",
          });
          break;
        case 2:
          window.scrollTo({
            top: this.$refs["gallery"].offsetTop - 100,
            behavior: "smooth",
          });
          break;
        case 3:
          window.scrollTo({
            top: this.$refs["info"].offsetTop - 100,
            behavior: "smooth",
          });
          break;
      }
    },
  },
};
</script>

<style scoped></style>
