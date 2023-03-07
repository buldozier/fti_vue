<template>
  <div class="partners" ref="partners">
    <div class="container">
      <h2 class="partners__header">Партнеры</h2>
      <div class="partners__flexbox">
        <!-- 1 partner rosatom-->
        <a href="https://rosatom.ru/index.html">
          <div class="partner">
            <img src="../assets/img/partners/Росатом.png" alt="Росатом" />
          </div>
        </a>
        <!-- 2 partner npoa-->
        <a href="https://www.npoa.ru">
          <div class="partner">
            <img src="../assets/img/partners/НПОА.png" alt="НПО Автоматики" />
          </div>
        </a>
        <!-- 3 partner naumen-->
        <a href="https://www.naumen.ru">
          <div class="partner">
            <img src="../assets/img/partners/Наумен.png" alt="Наумен" />
          </div>
        </a>
        <!-- 4 partner yandex-->
        <a href="https://ya.ru">
          <div class="partner">
            <img src="../assets/img/partners/Яндекс.png" alt="Яндекс" />
          </div>
        </a>
        <!-- 5 partner sber-->
        <a href="https://sber.ru">
          <div class="partner">
            <img src="../assets/img/partners/Сбер.png" alt="Сбер" />
          </div>
        </a>
        <!-- 6 partner gazprom-->
        <a href="https://www.gazprom.ru">
          <div class="partner">
            <img src="../assets/img/partners/Газпром.png" alt="Сбер" />
          </div>
        </a>
        <!-- 7 partner ugmk-->
        <a href="https://www.ugmk.com">
          <div class="partner">
            <img src="../assets/img/partners/УГМК.png" alt="Росатом" />
          </div>
        </a>
        <!-- 8 partner rostelekom-->
        <a href="https://ekt.rt.ru">
          <div class="partner">
            <img
              src="../assets/img/partners/Ростелеком.png"
              alt="НПО Автоматики"
            />
          </div>
        </a>
        <!-- 9 partner prosoft-->
        <a href="https://www.prosoft.ru">
          <div class="partner">
            <img src="../assets/img/partners/Прософт.png" alt="Наумен" />
          </div>
        </a>
        <!-- 10 partner kontur-->
        <a href="https://kontur.ru">
          <div class="partner">
            <img src="../assets/img/partners/Контур.png" alt="Яндекс" />
          </div>
        </a>
        <!-- 11 partner k telekom-->
        <a href="https://k-telecom.org">
          <div class="partner">
            <img src="../assets/img/partners/КТелеком.png" alt="Сбер" />
          </div>
        </a>
        <!-- 12 partner krat-->
        <a>
          <div class="partner">
            <img src="../assets/img/partners/КРЭТ.png" alt="Сбер" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnersComp",
};
</script>

<style lang="scss" scoped>
.partners__flexbox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    gap: 40px 0;
  }
}

.partner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 145px;
  height: 70px;
  background-color: #f9f4da;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 100px;
  }
  @media screen and (min-width: 1024px) {
    width: 270px;
    height: 150px;
  }
  & img {
    transition: filter 0.2s ease-in-out;
    transform: scale(0.5);
    @media screen and (min-width: 768px) {
      transform: scale(0.7);
    }
    @media screen and (min-width: 1024px) {
      filter: saturate(0);
      transform: scale(1);
    }
  }
  &:hover img {
    filter: saturate(1);
  }
}
</style>
