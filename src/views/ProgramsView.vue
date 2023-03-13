<template>
  <div class="page-wrap">
    <div class="programs">
      <about-programs-comp />
      <programs-slider-comp />
    </div>
  </div>
</template>

<script>
import AboutProgramsComp from "@/components/AboutProgramsComp";
import ProgramsSliderComp from "@/components/ProgramsSliderComp";
export default {
  name: "ProgramsView",
  components: { AboutProgramsComp, ProgramsSliderComp },
};
</script>

<style scoped></style>
