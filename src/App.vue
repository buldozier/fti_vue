<template>
  <div class="about">
    <navbar-comp />
    <router-view />
    <footer-comp />
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp";
import FooterComp from "@/components/FooterComp";
export default {
  name: "App",
  components: { NavbarComp, FooterComp },
};
</script>

<style lang="scss">
div {
}
</style>
