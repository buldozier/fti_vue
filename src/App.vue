<template>
  <main class="main">
    <navbar-comp />
    <router-view />
    <footer-comp />
    <modal-u-i v-if="showModal" />
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarComp";
import FooterComp from "@/components/FooterComp";
import ModalUI from "@/components/UI/ModalUI";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { NavbarComp, FooterComp, ModalUI },
  computed: {
    ...mapGetters(["showModal"]),
  },
};
</script>

<style lang="scss">
div {
}
</style>
