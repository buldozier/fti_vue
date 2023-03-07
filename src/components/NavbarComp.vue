<template>
  <header v-if="isMobileSize" class="header-mobile">
    <router-link class="navbar-mobile__link" @click="toTopOnPage(true)" to="/">
      <img src="../assets/img/лев.png" alt="Логотип" />
    </router-link>
    <div class="toggle-sidebar" @click.stop="toggleMobileMenu">
      <button class="menu-icon">
        <img src="../assets/icons/ui-checks-grid.svg" alt="Меню" />
      </button>
    </div>
    <div ref="navbar_mobile" class="navbar-mobile" @click.stop>
      <nav class="navbar-mobile__links">
        <router-link class="navbar-mobile__link" @click="toTopOnPage" to="/">
          <img src="../assets/icons/house-door-menu.svg" alt="Об институте" />
          <p>Об институте</p>
        </router-link>
        <router-link
          class="navbar-mobile__link"
          @click="toTopOnPage"
          to="/programs"
        >
          <img
            src="../assets/icons/file-text-menu.svg"
            alt="Направления подготовки"
          />
          <p>Направления</p>
        </router-link>
        <router-link
          class="navbar-mobile__link"
          @click="toTopOnPage"
          to="/student_union"
        >
          <img src="../assets/icons/people-menu.svg" alt="Союз студентов" />
          <p>Союз студентов</p>
        </router-link>
        <router-link
          class="navbar-mobile__link"
          @click="toTopOnPage"
          to="/contacts"
        >
          <img src="../assets/icons/telephone-menu.svg" alt="Контакты" />
          <p>Контакты</p>
        </router-link>
      </nav>
      <button class="navbar-mobile__close-button" @click="toggleMobileMenu">
        <img src="../assets/icons/x.svg" alt="Закрыть меню" />
      </button>
    </div>
  </header>
  <header
    v-else
    class="header"
    @mouseover="headerOnFocus"
    @mouseout="headerOutFocus"
  >
    <div class="container-header">
      <div class="navbar" ref="navbar">
        <router-link class="navbar__logo" @click="toTopOnPage" to="/">
          <img src="../assets/img/лев.png" alt="Логотип" />
        </router-link>
        <nav class="navbar__links">
          <router-link class="navbar__link" @click="toTopOnPage" to="/">
            Об институте
          </router-link>
          <router-link class="navbar__link" @click="toTopOnPage" to="/programs"
            >Направления подготовки</router-link
          >
          <router-link
            class="navbar__link"
            @click="toTopOnPage"
            to="/student_union"
            >Союз студентов</router-link
          >
          <router-link class="navbar__link" @click="toTopOnPage" to="/contacts"
            >Контакты</router-link
          >
        </nav>
      </div>
      <div class="dashed-outline" ref="dashedOutline"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {
      isMobileSize: null,
      scrollLength: 0,
    };
  },
  methods: {
    toTopOnPage(logo) {
      window.scroll(0, 0);
      if (logo !== true) {
        this.toggleMobileMenu();
      }
    },
    onScroll() {
      if (this.$refs.navbar && this.$refs.dashedOutline) {
        if (window.innerHeight - window.scrollY !== window.innerHeight) {
          this.$refs.navbar.classList.add("navbar-hidden");
          this.$refs.dashedOutline.classList.add("dash-showed");
        } else {
          this.$refs.navbar.classList.remove("navbar-hidden");
          this.$refs.dashedOutline.classList.remove("dash-showed");
        }
      }
      this.scrollLength = window.scrollY;
    },
    headerOnFocus() {
      this.$refs.navbar.classList.remove("navbar-hidden");
      this.$refs.dashedOutline.classList.remove("dash-showed");
    },
    headerOutFocus() {
      if (window.scrollY >= 100) {
        this.$refs.navbar.classList.add("navbar-hidden");
        this.$refs.dashedOutline.classList.add("dash-showed");
      }
    },
    updateSize() {
      window.innerWidth < 1024;
    },
    toggleMobileMenu() {
      if (this.$refs.navbar_mobile) {
        this.$refs.navbar_mobile.classList.toggle("navbar-mobile-active");
      }
    },
    clickOutsideNavbar() {
      if (this.$refs.navbar_mobile) {
        if (
          this.$refs.navbar_mobile.classList.contains("navbar-mobile-active") &&
          event.target.className !== "navbar-mobile navbar-mobile-active"
        ) {
          this.$refs.navbar_mobile.classList.toggle("navbar-mobile-active");
        }
      }
    },
  },
  mounted() {
    this.updateSize();
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.updateSize);
    window.addEventListener("click", this.clickOutsideNavbar);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.updateSize);
    window.removeEventListener("click", this.clickOutsideNavbar);
  },
};
</script>

<style lang="scss" scoped>
.header-mobile {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: $additional-color-2;
  width: 100%;
  height: 50px;
  padding: 10px;
  z-index: 100;
  & img {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 768px) {
    height: 70px;
    & img {
      width: 35px;
      height: 35px;
    }
  }
}

.toggle-sidebar {
  display: flex;
  height: 100%;
}

.navbar-mobile {
  display: flex;
  transform: translateY(200px);
  box-sizing: content-box;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 200px;
  border-radius: 20px 20px 0 0;
  background-color: $additional-color-2;
  width: 100%;
  transition: transform 0.1s ease-in-out;
  &__links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: auto;
  }
  &__link {
    display: flex;
    color: $text-color;
    text-decoration: none;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  &__close-button {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
}

.navbar-mobile-active {
  transform: translateY(0);
}

.navbar-link .header {
  display: flex;
  padding: 0 135px;
  height: 150px;
  position: sticky;
  top: 0;
  & .container-header {
    width: 100%;
    align-self: center;
    margin: 0;
    padding: 0;
  }
}

.header {
  display: flex;
  padding: 0 135px;
  height: 150px;
  position: sticky;
  top: 0;
  z-index: 100;
  & .container-header {
    width: 100%;
    align-self: center;
    margin: 0;
    padding: 0;
  }
}

.navbar {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  color: $main-color;
  background-color: $background-color;
  border-radius: 50px;
  font-weight: 500;
  justify-content: space-between;
  padding: $pg * 3 $pg * 5;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 3px 0 $main-color;
  &__logo {
    display: flex;
    justify-content: center;
    & img {
      align-self: center;
      width: 50px;
      height: 50px;
    }
  }
  &__links {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  &__link {
    position: relative;
    align-self: center;
    color: inherit;
    text-decoration: none;
    padding: $pg 0;
    transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: $main-color;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 1px;
      width: 0;
      background-color: $main-color-2;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

.dashed-outline {
  height: 90px;
  top: 0;
  left: 0;
  border-radius: 50px;
  border: 3px dashed $main-color;
  border-top: none;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform: translateY(-90px);
  margin-bottom: -90px;
  z-index: -1;
}

.navbar-hidden {
  transform: translateY(-100px);
  opacity: 0;
}

.dash-showed {
  transform: translateY(-190px);
  opacity: 0.6;
}

.router-link-active.navbar__link:after {
  width: 100%;
}

.register {
  display: flex;
  justify-content: center;
}
</style>
