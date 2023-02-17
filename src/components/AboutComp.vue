<template>
  <div class="about">
    <div class="about__top-content">
      <div class="about__title-and-text">
        <h2 class="about__title">Физико-технологический институт</h2>
        <div class="about__text">
          <p>
            Физико-технологический институт УрФУ это современный учебно-научный
            центр в области ядерных, биомедицинских, информационных технологий,
            материаловедения. Мощные научные школы, международное
            сотрудничество, техническая оснащенность, связь с производством,
            физтеховская фирменная система обучения - все это определяет
            конкурентоспособность института сегодня и уверенный взгляд в
            будущее.
          </p>
        </div>
      </div>

      <div class="about__picture">
        <img src="../assets/img/photo/физтех.jpg" alt="Корпус ФТИ" />
      </div>
    </div>
    <div class="about__bottom-content">
      <div class="about__buttons">
        <button-u-i>Физтех в людях</button-u-i>
        <button-u-i>Кафедры</button-u-i>
        <button-u-i>Партнеры</button-u-i>
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
</template>

<script>
import ButtonUI from "@/components/UI/ButtonUI";
export default {
  name: "AboutComp",
  components: { ButtonUI },
};
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 50px;
}

.about__title {
  text-align: left;
}

.about__picture {
  display: inline-block;
  position: absolute;
  filter: brightness(0.3);
  box-shadow: 3px 3px #fcba28;
  border-radius: 50%;
  top: 40px;
  right: 30px;
  z-index: -1;
  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}

.about__buttons {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-bottom: 60px;
}

.about__end-pictures {
  display: none;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.about__end-picture {
  border-radius: 10px;
  box-shadow: 5px 5px #fcba28;
  & img {
    width: 270px;
    border-radius: 10px;
  }
}
</style>
