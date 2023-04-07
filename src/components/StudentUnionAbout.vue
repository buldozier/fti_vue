<template>
  <div class="about">
    <div class="container">
      <div class="about__content">
        <div class="about__top">
          <div class="about__title-and-text">
            <h2 class="about__title title">Союз студентов ФТИ</h2>
            <div class="about__text">
              <p>
                Союз студентов ФТИ – это профсоюзная студенческая организация,
                основными задачами которой являются: правовая защита и
                организация внеучебной деятельности учащихся, а также управление
                и развитие студенческих проектов и инициатив. Союз студентов ФТИ
                это не просто команда, это целая семья, которая работает на
                общие цели и всегда поддерживает друг друга. Многолетний опыт
                работы позволяет выделить множество разнообразных направлений
                нашей деятельности, которые работают как один единый механизм и
                обеспечивают студентов яркими впечатлениями, полезными навыками
                и умениями. Союз студентов ФТИ делает все, чтобы свои
                студенческие годы вы не забыли никогда!
              </p>
            </div>
          </div>
        </div>
        <div class="about__bottom">
          <div class="about__buttons">
            <button-u-i
              class="about__button button"
              v-for="(button, index) in buttons"
              :key="index"
              @click="clickBtn(index)"
              ><slot>{{ button }}</slot></button-u-i
            >
          </div>
        </div>
      </div>
      <div class="about__picture">
        <img src="../assets/img/student_union/Flion_1.png" alt="Логотип ФТИ" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from "@/components/UI/ButtonUI";
export default {
  name: "StudentUnionAboutComp",
  components: { ButtonUI },
  data() {
    return {
      buttons: ["Мероприятия", "Команда", "Галерея", "Документы"],
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
  margin-bottom: $mn * 10;
  @media screen and (min-width: 1024px) {
    margin-bottom: $mn * 20;
  }
  & .container {
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
    }
  }
  &__top {
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
  }
  &__title-and-text {
    @media screen and (min-width: 1024px) {
      width: 700px;
    }
  }
  &__picture {
    display: inline-block;
    position: absolute;
    filter: brightness(0.3);
    top: 13%;
    right: 25%;
    z-index: -1;
    @media screen and (min-width: 768px) {
      top: -10px;
      right: 10%;
    }
    @media screen and (min-width: 1024px) {
      position: inherit;
      filter: brightness(1);
      width: 270px;
      height: 383px;
      top: 0;
      right: 0;
      z-index: 1;
      align-self: center;
    }
    @media screen and (min-width: 1200px) {
      width: 340px;
      height: 481px;
    }
    & img {
      width: 170px;
      height: 241px;
      @media screen and (min-width: 1024px) {
        width: 270px;
        height: 383px;
      }
      @media screen and (min-width: 1200px) {
        width: 340px;
        height: 481px;
      }
    }
  }
  &__buttons {
    margin-top: $mn * 8;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-bottom: $mn * 12;
    cursor: pointer;
    @media screen and (min-width: 1024px) {
      justify-content: flex-start;
      margin-bottom: 0;
    }
    @media screen and (min-width: 1200px) {
      margin-top: $mn * 16;
      margin-bottom: 0;
    }
  }
}

.button {
  display: flex;
  width: 128px;
  height: 50px;
  border: 1px solid #fcba28;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: #fcba28;
  transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
  user-select: none;
  @media screen and (min-width: 1024px) {
    width: 148px;
  }
  @media screen and (min-width: 1200px) {
    width: 160px;
  }
}

.button:active,
.button:hover {
  color: #0f0d0e;
  background-color: #fcba28;
}
</style>
