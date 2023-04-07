<template>
  <main class="main">
    <div ref="top"></div>
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
  mounted() {
    console.log(123);
    window.scrollTo(0, this.$refs["top"].offsetTop);
  },
};
</script>

<style lang="scss">
div {
}
</style>
