<template>
  <div class="page-wrap">
    <div class="programs">
      <about-programs-comp />
      <programs-slider-comp />
      <calculator-comp />
      <programs-info-comp />
    </div>
  </div>
</template>

<script>
import AboutProgramsComp from "@/components/ProgramsAbout";
import ProgramsSliderComp from "@/components/ProgramsSlider";
import CalculatorComp from "@/components/ProgramsCalculator";
import ProgramsInfoComp from "@/components/ProgramsInfo";
export default {
  name: "ProgramsView",
  components: {
    AboutProgramsComp,
    ProgramsSliderComp,
    CalculatorComp,
    ProgramsInfoComp,
  },
};
</script>

<style scoped></style>
