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
            <div class="about__button button events-btn">Мероприятия</div>
            <div class="about__button button team-btn">Команда</div>
            <div class="about__button button gallery-btn">Галерея</div>
            <div class="about__button button documents-btn">Документы</div>
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
export default {
  name: "StudentUnionAboutComp",
};
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 50px;
  &__title {
    text-align: left;
  }
  &__picture {
    display: inline-block;
    position: absolute;
    filter: brightness(0.3);
    top: 13%;
    right: 25%;
    z-index: -1;
    & img {
      width: 170px;
      height: 241px;
    }
  }
  &__buttons {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin-bottom: 60px;
  }
}

.button {
  display: flex;
  width: 140px;
  height: 50px;
  border: 1px solid #fcba28;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: #fcba28;
  transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
  user-select: none;
}

.button:active,
.button:hover {
  color: #0f0d0e;
  background-color: #fcba28;
}
</style>
