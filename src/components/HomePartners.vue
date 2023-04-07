<template>
  <div class="partners" ref="partners">
    <div class="container">
      <h2 class="partners__header">Партнеры</h2>
      <div class="partners__flexbox">
        <a :href="partner.href" v-for="partner in partners" :key="partner.id">
          <div class="partner">
            <img
              :src="require(`../assets/img/partners/${partner.src}`)"
              :alt="partner.alt"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnersComp",
  data() {
    return {
      partners: [
        {
          id: 1,
          href: "https://rosatom.ru/index.html",
          src: "Росатом.png",
          alt: "Росатом",
        },
        {
          id: 2,
          href: "https://www.npoa.ru",
          src: "НПОА.png",
          alt: "НПО Автоматики",
        },
        {
          id: 3,
          href: "https://www.naumen.ru",
          src: "Наумен.png",
          alt: "Наумен",
        },
        {
          id: 4,
          href: "https://ya.ru",
          src: "Яндекс.png",
          alt: "Яндекс",
        },
        {
          id: 5,
          href: "https://sber.ru",
          src: "Сбер.png",
          alt: "Сбер",
        },
        {
          id: 6,
          href: "https://www.gazprom.ru",
          src: "Газпром.png",
          alt: "Газпром",
        },
        {
          id: 7,
          href: "https://www.ugmk.com",
          src: "УГМК.png",
          alt: "УГМК",
        },
        {
          id: 8,
          href: "https://ekt.rt.ru",
          src: "Ростелеком.png",
          alt: "Ростелеком",
        },
        {
          id: 9,
          href: "https://www.prosoft.ru",
          src: "Прософт.png",
          alt: "Прософт",
        },
        {
          id: 10,
          href: "https://kontur.ru",
          src: "Контур.png",
          alt: "Контур",
        },
        {
          id: 11,
          href: "https://k-telecom.org",
          src: "КТелеком.png",
          alt: "КТелеком",
        },
        {
          id: 12,
          src: "КРЭТ.png",
          alt: "КРЭТ",
        },
      ],
    };
  },
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
