<template>
  <div class="page-wrap">
    <student-union-about-comp />
    <student-union-events-comp />
  </div>
</template>

<script>
import StudentUnionAboutComp from "@/components/StudentUnionAboutComp";
import StudentUnionEventsComp from "@/components/StudentUnionEventsComp";
export default {
  name: "StudentUnionView",
  components: { StudentUnionAboutComp, StudentUnionEventsComp },
};
</script>

<style scoped></style>
