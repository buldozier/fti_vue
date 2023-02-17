<template>
  <div class="about">
    <navbar-comp />
    <router-view />
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp";
export default {
  name: "App",
  components: { NavbarComp },
};
</script>

<style lang="scss">
div {
}
</style>
