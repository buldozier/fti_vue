<template>
  <footer class="footer">
    <div class="container__footer">
      <div class="footer__content">
        <h3 class="footer__title">
          Физико-технологический институт (ФТИ) УрФУ
        </h3>
        <p class="footer__adress">
          Адрес: 620002, Уральский федеральный округ, Свердловская область, г.
          Екатеринбург, ул. Мира, 21
        </p>
        <div class="footer__contacts">
          <div class="footer__mail">
            <img src="../assets/icons/envelope.svg" alt="Почта" />
            <a href="mailto:fizteh@urfu.ru">fizteh@urfu.ru</a>
          </div>
          <div class="footer__vk">
            <img src="../assets/icons/vk.svg" alt="ВКонтакте" />
            <a href="https://vk.com/profburo_fti" target="_blank"
              >vk.com/profburo_fti</a
            >
          </div>
        </div>
        <div class="footer__btn">
          <a href="https://urfu.ru/ru/" target="_blank">
            <button-u-i class="footer__btn_inner">
              <div>Сайт УрФУ</div>
            </button-u-i>
          </a>
        </div>
      </div>
      <div class="footer__picture">
        <img src="../assets/img/photo/физтех_линии.png" alt="Физтех" />
      </div>
    </div>
  </footer>
</template>

<script>
import ButtonUI from "@/components/UI/ButtonUI";
export default {
  name: "FooterComp",
  components: { ButtonUI },
};
</script>

<style lang="scss" scoped>
.footer {
  color: #0f0d0e;
  background-color: $main-color-2;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  &__content {
    display: flex;
    flex-direction: column;
    width: 310px;
    z-index: 5;
    & a {
      display: inline-block;
    }
    @media screen and (min-width: 768px) {
      width: 435px;
    }
    @media screen and (min-width: 1024px) {
      width: 100%;
    }
  }
  &__title,
  &__adress {
    margin-bottom: $mn * 6;
  }
  &__contacts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: $mn * 6;
    & a {
      color: #0f0d0e;
      text-decoration: none;
      position: relative;
      &:hover {
        text-decoration: underline;
      }
    }
    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      gap: 20px;
    }
  }
  &__mail {
    display: flex;
    align-items: center;
    & img {
      width: 20px;
      @media screen and (min-width: 768px) {
        width: 25px;
      }
    }
    & a {
      margin-left: $mn * 2;
    }
  }
  &__vk {
    display: flex;
    align-items: center;
    & img {
      width: 25px;
      @media screen and (min-width: 768px) {
        width: 30px;
      }
    }
    & a {
      margin-left: $mn;
    }
  }
  &__btn {
    margin: auto;
    &_inner {
      border: 1px solid #0f0d0e;
      color: $text-color-2;
      transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
      user-select: none;
      &:active,
      &:hover {
        color: $main-color-2;
        background-color: #0f0d0e;
      }
    }
    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }
  &__picture img {
    display: none;
    width: 245px;
    @media screen and (min-width: 768px) {
      display: inline-block;
    }
    @media screen and (min-width: 1024px) {
      width: 350px;
    }
  }
}

.container__footer {
  width: 280px;
  margin: 0 auto $mn * 10;
  padding: $pg * 10 $pg * 3;
  display: flex;
  justify-content: center;
  position: relative;
  background: url(../assets/img/photo/физтех_линии_полупрозрачный.png) no-repeat
    50% 25%;
  background-size: 240px;
  & a {
    color: #0f0d0e;
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    width: 670px;
    background: none;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    width: 970px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
}
</style>
