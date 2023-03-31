<template>
  <div class="programs-slider">
    <div class="container">
      <div class="programs-slider__top">
        <div class="programs-slider__top_content">
          <h2 class="programs-slider__header">Направления подготовки</h2>
          <div class="slider-buttons" v-show="isLaptopSize">
            <button class="swiper-button-prev">
              <img src="../assets/icons/arrow-up-short_1.svg" alt="Назад" />
            </button>
            <button class="swiper-button-next">
              <img src="../assets/icons/arrow-up-short_1.svg" alt="Вперед" />
            </button>
          </div>
        </div>
        <div class="programs-slider__buttons">
          <div
            class="programs-slider__button"
            :class="isSwiperBakalavr ? 'button-checked' : ''"
            @click="setProgramsType('bak')"
          >
            Бакалавриат/Специалитет
          </div>
          <div
            class="programs-slider__button"
            :class="isSwiperBakalavr ? '' : 'button-checked'"
            @click="setProgramsType()"
          >
            Магистратура
          </div>
        </div>
      </div>
      <Swiper
        v-if="isSwiperBakalavr"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :scrollbar="{
          hide: true,
          draggable: true,
        }"
        :modules="modules"
        :slides-per-view="slidesPerSlide"
        :slides-per-group="slidesPerSlide"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="programBak in getProgramsBak"
          :key="programBak.id"
        >
          <div class="swiper-slide__card">
            <div class="swiper-slide__title">
              <div
                class="swiper-slide__title_header"
                :class="programBak.smallTitle"
              >
                <h4>{{ programBak.title }}</h4>
              </div>
              <div class="swiper-slide__title_bottom">
                <div
                  class="programs-stage"
                  :class="
                    programBak.stage === 'Бакалавриат'
                      ? 'bakalavr'
                      : 'specialist'
                  "
                >
                  {{ programBak.stage }}
                </div>
                <div class="programs-direction-code">
                  Код направления: {{ programBak.code }}
                </div>
              </div>
            </div>
            <div class="swiper-slide__description">
              <ul>
                <li
                  v-for="(description, index) in programBak.description"
                  :key="index"
                >
                  {{ description }}
                </li>
              </ul>
            </div>
            <div class="swiper-slide__footer">
              <div class="swiper-slide__places-and-score">
                <div class="swiper-slide__places-and-score_places">
                  <div class="number">{{ programBak.places }}</div>
                  <div class="text">бюджетных мест</div>
                </div>
                <div class="swiper-slide__places-and-score_score">
                  <div class="number">{{ programBak.score }}</div>
                  <div class="text">проходной балл</div>
                </div>
              </div>
              <div class="swiper-slide__subjects">
                <div
                  v-for="(subject, index) in programBak.subjects"
                  :key="index"
                  :class="subject.class"
                  class="swiper-slide__subject"
                >
                  {{ subject.name }}
                </div>
              </div>
            </div>
            <div class="swiper-slide__button-block">
              <a :href="programBak.link" target="_blank">
                <button-u-i class="swiper-slide__button">
                  <p>Подробнее о направлении</p>
                </button-u-i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        v-else
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :scrollbar="{
          hide: true,
          draggable: true,
        }"
        :modules="modules"
        :slides-per-view="slidesPerSlide"
        :slides-per-group="slidesPerSlide"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="programMag in getProgramsMag"
          :key="programMag.id"
        >
          <div class="swiper-slide__card">
            <div class="swiper-slide__title">
              <div
                class="swiper-slide__title_header magistr-header"
                :class="programMag.smallTitle"
              >
                <h4>{{ programMag.title }}</h4>
              </div>
              <div class="swiper-slide__title_bottom">
                <div class="programs-stage magistr">Магистратура</div>
                <div class="programs-direction-code">
                  Код направления: {{ programMag.code }}
                </div>
              </div>
            </div>
            <div class="swiper-slide__description_magistr">
              {{ programMag.description }}
            </div>
            <div class="swiper-slide__footer_magistr">
              <div class="swiper-slide__places-and-score">
                <div class="swiper-slide__places-and-score_places">
                  <div class="number">{{ programMag.places }}</div>
                  <div class="text">бюджетных мест</div>
                </div>
              </div>
              <div class="swiper-slide__subjects_magistr">
                <div
                  v-for="(subject, index) in programMag.subjects"
                  :key="index"
                  class="swiper-slide__subject_magistr"
                >
                  <a
                    :href="
                      'https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/programs%2F' +
                      subject
                    "
                    target="_blank"
                  >
                    <img
                      src="../assets/icons/filetype-pdf.svg"
                      alt="Ссылка на скачивание"
                    />
                  </a>
                </div>
                <p>вступительные испытания</p>
              </div>
            </div>
            <div class="swiper-slide__button-block">
              <a :href="programMag.link" target="_blank">
                <button-u-i class="swiper-slide__button">
                  <p>Подробнее о направлении</p>
                </button-u-i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import ButtonUI from "@/components/UI/ButtonUI";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar, Pagination, Navigation } from "swiper";
import { mapGetters } from "vuex";

export default {
  name: "ProgramsSliderComp",
  components: { ButtonUI, Swiper, SwiperSlide },
  data() {
    return {
      isSwiperBakalavr: true,
      isLaptopSize: null,
      slidesPerSlide: 1,
    };
  },
  setup() {
    return {
      modules: [Scrollbar, Pagination, Navigation],
    };
  },
  methods: {
    setSlidesPerSlide() {
      if (window.innerWidth < 768) {
        this.slidesPerSlide = 1;
      }
      if (window.innerWidth >= 768) {
        this.slidesPerSlide = 2;
      }

      if (window.innerWidth >= 1024) {
        this.slidesPerSlide = 3;
      }
    },
    setWindowSize() {
      this.isLaptopSize = window.innerWidth >= 1024;
    },
    setProgramsType(type) {
      type === "bak"
        ? (this.isSwiperBakalavr = true)
        : (this.isSwiperBakalavr = false);
    },
  },
  computed: {
    ...mapGetters(["getProgramsBak", "getProgramsMag"]),
  },
  mounted() {
    this.setSlidesPerSlide();
    this.setWindowSize();
    addEventListener("resize", () => {
      this.setSlidesPerSlide();
      this.setWindowSize();
    });
  },
};
</script>

<style lang="scss" scoped>
.slider-hidden {
  display: none !important;
}

.programs-slider {
  margin-left: $mn * 3;
  margin-right: $mn * 3;
  background-color: #231f20;
  border-radius: 20px;
  margin-bottom: $mn * 10;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    margin-bottom: $mn * 20;
  }
  & .container {
    padding-top: $mn * 5;
    padding-bottom: $mn * 5;
    @media screen and (min-width: 1024px) {
      padding-top: $mn * 10;
      padding-bottom: $mn * 10;
    }
  }
  &__top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: $mn * 6;
    &_content {
      display: flex;
      width: 100%;
      gap: 20px;
      @media screen and (min-width: 768px) {
        justify-content: space-between;
      }
    }
  }
  &__header {
    margin-bottom: 0;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
    @media screen and (min-width: 1024px) {
      width: auto;
    }
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    justify-content: space-evenly;
    font-size: $fz;
    margin: $mn * 4 0;
    @media screen and (min-width: 1024px) {
      justify-content: flex-start;
      font-size: $fz-l;
      gap: 20px;
    }
  }
  &__button {
    color: #fcba28;
    padding: $pg * 2;
    border: 1px solid #fcba28;
    border-radius: 10px;
    cursor: pointer;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
}

.button-checked {
  color: #0f0d0e;
  border: 1px solid #fcba28;
  background-color: #fcba28;
}

.swiper {
  width: 280px;
  color: #0f0d0e;
  font-size: $fz;
  overflow: inherit !important;
  @media (min-width: 768px) {
    width: 580px;
  }
  @media screen and (min-width: 1024px) {
    width: 950px;
  }
  @media screen and (min-width: 1050px) {
    width: 1000px;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
}

.swiper-slide {
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  &__card {
    background-color: #f9f4da;
    border-radius: 10px;
  }
  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: $pg * 3 $pg * 3 0 $pg * 3;
    &_header {
      display: flex;
      text-align: center;
      height: 60px;
      @media screen and (min-width: 1024px) {
        font-size: $fz-xl;
      }
      & h4 {
        margin: auto;
        @media screen and (min-width: 1024px) {
          font-size: $fz-xl;
        }
      }
      &.magistr-header {
        height: 82px;
        & h4 {
          font-size: $fz !important;
          @media screen and (min-width: 1200px) {
            text-align: center;
            font-size: $fz-l !important;
          }
        }
      }
    }
    &_bottom {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: $fz-s;
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
      }
      @media screen and (min-width: 1200px) {
        font-size: $fz;
      }
    }
    &__button {
      display: inline-block;
      padding: 10px;
      border: 1px solid #0f0d0e;
      border-radius: 10px;
      cursor: pointer;
      color: #0f0d0e;
      transition: 0.2s all ease-in-out;
      margin-left: 15px;
      margin-bottom: 40px;
      text-decoration: none;
      font-size: 14px;
    }
  }
  &__description {
    padding: $pg * 3 $pg * 3 $pg * 3 $pg * 6;
    font-size: $fz-s;
    height: 220px;
    @media screen and (min-width: 1200px) {
      font-size: $fz;
    }
    &_magistr {
      padding: $pg * 3;
      font-size: $fz-s;
      height: 282px;
      @media screen and (min-width: 1200px) {
        font-size: $fz;
      }
    }
  }
  &__footer {
    display: flex;
    gap: 10px;
    font-size: $fz-l;
    padding: 0 15px 15px 15px;
    &_magistr {
      display: flex;
      gap: 20px;
      padding: 0 15px 15px 15px;
    }
  }
  &__places-and-score {
    display: flex;
    flex-direction: column;
    width: 110px;
    gap: 10px;
    font-size: $fz;
    line-height: 1;
    @media screen and (min-width: 1024px) {
      font-size: $fz-m;
      width: 146px;
    }
    &_places {
      & > .number::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 24px;
        width: 24px;
        background: url(../assets/icons/people.svg);
        background-size: contain;
      }
      & a {
        display: inline-block;
        font-size: 0;
        & + a {
          margin-left: 20px;
        }
        & + .text {
          margin-top: 5px;
        }
      }
    }
    &_score {
      margin-top: 10px;
      & > .number::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 24px;
        width: 24px;
        background: url(../assets/icons/check-all.svg);
        background-size: contain;
      }
    }
  }
  &__subjects {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 5px;
    @media screen and (min-width: 1200px) {
      margin-left: 20px;
    }
    &_magistr {
      display: flex;
      flex-wrap: wrap;
      gap: 2px;
      flex: 1;
    }
  }
  &__subject {
    height: 15px;
    line-height: 1.2;
    padding: $pg $pg * 2;
    border-radius: 10px;
    color: #f9f4da;
    font-size: 12px;
    &_magistr {
      margin: 0;
      height: 24px;
      &:first-child {
        margin-right: 8px;
      }
    }
  }
  &__button-block {
    display: flex;
    padding-bottom: $pg * 6;
    & a {
      margin: 0 auto;
      text-decoration: none;
    }
  }
  &__button {
    border-color: $background-color;
    margin: 0 auto;
    height: 40px;
    padding: 0 $pg;
    color: $text-color-2;
    @media screen and (min-width: 1200px) {
      font-size: $fz-m;
      width: 200px;
    }
    &:hover {
      background-color: $background-color;
      color: $text-color;
    }
  }
}

.small-title h4 {
  font-size: $fz !important;
}

.programs-stage {
  padding: 5px 10px;
  border-radius: 10px;
  margin: 0 auto;
  color: #f9f4da;
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
}

.bakalavr {
  background-color: #163970;
}

.specialist {
  background-color: #bb1d88;
}

.magistr {
  background-color: #540096;
}

.programs-direction-code {
  align-self: center;
}

.number {
  font-size: 20px;
  font-weight: 500;
  position: relative;
  & + .text {
    margin-top: 10px;
  }
}

.math {
  background-color: #9d1717;
}

.russian {
  background-color: #18756f;
}

.physics {
  background-color: #18741b;
}

.informatics {
  background-color: #741870;
}

.chemistry {
  background-color: #ff5c00;
}

.slider-buttons {
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 30px;

    margin-right: 50px;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.swiper-pagination {
  margin-bottom: 5px;
}

.swiper-scrollbar {
  margin-bottom: 5px;
}

@media screen and (min-width: 1024px) {
  .slider-buttons {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-right: 50px;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    --swiper-navigation-size: 0px;
    position: static !important;
    width: 60px !important;
    height: 60px !important;
    border-radius: 50%;
    border: none;
    background-color: $main-color-2 !important;
    transition: all 0.25s ease-in-out;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: $main-color !important;
  }

  .swiper-button-disabled {
    background-color: $main-color-2 !important;
  }

  .swiper-button-prev img,
  .swiper-button-next img {
    pointer-events: none;
    width: 60px;
    height: 60px;
  }

  .swiper-button-prev img {
    transform: rotate(-90deg);
  }

  .swiper-button-next img {
    transform: rotate(90deg);
  }
}
</style>
