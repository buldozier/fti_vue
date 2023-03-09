<template>
  <div class="about">
    <div class="container">
      <div class="about__top-content">
        <div class="about__title-and-text">
          <h2 class="about__title">Физико-технологический институт</h2>
          <div class="about__text">
            <p>
              Физико-технологический институт УрФУ это современный
              учебно-научный центр в области ядерных, биомедицинских,
              информационных технологий, материаловедения. Мощные научные школы,
              международное сотрудничество, техническая оснащенность, связь с
              производством, физтеховская фирменная система обучения - все это
              определяет конкурентоспособность института сегодня и уверенный
              взгляд в будущее.
            </p>
          </div>
        </div>

        <div class="about__picture">
          <img src="../assets/img/photo/физтех.jpg" alt="Корпус ФТИ" />
        </div>
      </div>
      <div class="about__bottom-content">
        <div class="about__buttons">
          <button-u-i
            class="about__button"
            v-for="(button, index) in buttons"
            :key="index"
            @click="clickBtn(index)"
            ><slot>{{ button }}</slot></button-u-i
          >
        </div>
        <div class="about__end-pictures">
          <div class="about__end-picture">
            <img src="../assets/img/photo/микроскоп.png" alt="Микроскоп" />
          </div>
          <div class="about__end-picture">
            <img src="../assets/img/photo/осциллограф.png" alt="Осциллограф" />
          </div>
          <div class="about__end-picture">
            <img src="../assets/img/photo/установка.png" alt="Установка" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from "@/components/UI/ButtonUI";
export default {
  name: "AboutComp",
  components: { ButtonUI },
  data() {
    return {
      buttons: ["Физтех в людях", "Кафедры", "Партнеры"],
    };
  },
  methods: {
    clickBtn(index) {
      this.$emit("scrollTo", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 50px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 100px;
    &__title-and-text {
      width: 600px;
    }
  }
  &__top-content {
    position: relative;
    @media screen and (min-width: 1024px) {
      display: flex;
      gap: 20px;
    }
    @media screen and (min-width: 1200px) {
      justify-content: space-between;
    }
  }
  &__title {
    text-align: left;
    @media screen and (min-width: 1024px) {
      margin-bottom: 50px;
    }
  }
  &__picture {
    display: inline-block;
    position: absolute;
    filter: brightness(0.3);
    box-shadow: 3px 3px #fcba28;
    border-radius: 50%;
    top: 0;
    right: 30px;
    z-index: -1;
    @media screen and (min-width: 1024px) {
      position: inherit;
      filter: brightness(1);
      box-shadow: 5px 5px #fcba28;
      border-radius: 50%;
      width: 350px;
      height: 350px;
      top: 0;
      right: 0;
      z-index: 1;
    }
    @media screen and (min-width: 1200px) {
      width: 383px;
      height: 383px;
    }
    & img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      @media screen and (min-width: 1024px) {
        width: 350px;
        height: 350px;
        border-radius: 50%;
      }
      @media screen and (min-width: 1200px) {
        width: 383px;
        height: 383px;
        border-radius: 50%;
      }
    }
  }
  &__buttons {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    margin-bottom: 60px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }
    @media screen and (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
  &__button {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: $main-color-2;
      color: $text-color-2;
    }
  }
  &__end-pictures {
    display: none;
    gap: 60px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media screen and (min-width: 1024px) {
      display: flex;
    }
  }
  &__end-picture {
    border-radius: 10px;
    box-shadow: 5px 5px #fcba28;
    & img {
      width: 270px;
      border-radius: 10px;
    }
  }
}
</style>
