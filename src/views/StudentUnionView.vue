<template>
  <div class="page-wrap">
    <student-union-about-comp />
    <student-union-events-comp />
    <student-union-team />
    <student-union-commissions />
    <student-union-gallery />
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
};
</script>

<style scoped></style>
