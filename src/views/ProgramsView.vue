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
import AboutProgramsComp from "@/components/ProgramsAboutComp";
import ProgramsSliderComp from "@/components/ProgramsSliderComp";
import CalculatorComp from "@/components/ProgramsCalculatorComp";
import ProgramsInfoComp from "@/components/ProgramsInfoComp";
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
