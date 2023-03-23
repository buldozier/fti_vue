<template>
  <div class="departments" ref="departments">
    <div class="container">
      <div class="departments__top">
        <h2 class="departments__header">Кафедры</h2>
        <div class="slider-buttons" v-show="isLaptopSize">
          <button class="swiper-button-prev">
            <img src="../assets/icons/arrow-up-short_1.svg" alt="Назад" />
          </button>
          <button class="swiper-button-next">
            <img src="../assets/icons/arrow-up-short_1.svg" alt="Назад" />
          </button>
        </div>
      </div>
      <Swiper
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
        <SwiperSlide v-for="slide in slides" :key="slide.id" class="slide">
          <div>
            <div class="slide__title">
              <h4>{{ slide.title }}</h4>
            </div>
            <div class="slide__description">
              <p>{{ slide.description }}</p>
            </div>
            <div class="slide__footer">
              <div class="slide__footer_head">
                Руководитель: {{ slide.head }}
              </div>
              <div class="slide__footer_year">
                Год основания: {{ slide.year }}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar, Pagination, Navigation } from "swiper";

export default {
  name: "DepartmentsComp",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      isLaptopSize: null,
      slidesPerSlide: 1,
      slides: [
        {
          id: 1,
          title: "Теоретической физики и прикладной математики",
          description:
            "Кафедра готовит специалистов в области физики, математики и информационных технологий. Присутствуют такие научные направления как машинное обучение, нейросетевые технологии и квантовые компьютеры.",
          head: "Соловьев И.В.",
          year: 1953,
        },
        {
          id: 2,
          title: "Технической физики",
          description:
            "Выпускники кафедры составляют значительную часть инженерно-технологических, научных и управленческих кадров разделительно-сублиматного комплекса атомной промышленности России, обеспечивают безопасную инадежную работу ядерных реакторов на АЭС, работают на предприятиях высоких технологий и вакадемических организациях Уральского региона.",
          head: "Токманцев В.И.",
          year: 1949,
        },
        {
          id: 3,
          title: "Экспериментальной физики",
          description:
            "Выпускников кафедры отличают системные фундаментальные знания физики и математики, добротные навыки практического создания электронных приборов и систем, умение находить оригинальные решения физико-технических или биотехнических задач любой сложности, решать проблемы «на стыке наук» в промышленности, науке, медицине.",
          head: "Иванов В.Ю.",
          year: 1951,
        },
        {
          id: 4,
          title: "Физических методов и приборов контроля качества",
          description:
            "Углубленное преподавание микро- и наноэлектроники, микропроцессорной техники, импульсной техники, что позволяет нашим выпускникам успешно разрабатывать новые электронные приборы контроля и диагностики. Расширенная подготовка по вычислительной технике: программирование, базы данных и банки знаний, микропроцессоры, автоматизированные системы для научных исследований, локальные и глобальные сети.",
          head: "Вайнштейн И.А.",
          year: 1983,
        },
        {
          id: 5,
          title: "Физики ВЭ процессов",
          description:
            "Кафедра “Физики высокоэнергетических процессов” проводится подготовка высокопрофессиональных кадров в таких научных областях, как физика конденсированного состояния, физика термоядерного синтеза и ядерных реакторов, физика высоких давлений и температур, компьютерное моделирование сложных быстропротекающих процессов.",
          head: "Рыкованов Г.Н.",
          year: 2013,
        },
        {
          id: 6,
          title: "Электрофизики",
          description:
            "Особенностью обучения на кафедре является то, что у каждого студента имеется доступ к уникальным электрофизическим установкам (в Институте электрофизики УрО РАН), многие из которых не имеют аналогов в мировой практике. Основой обучения студентов на кафедре является участие в работе научных лабораторий. Для выполнения программ и грантов разного уровня привлекаются студенты и аспиранты кафедры.",
          head: "Никулин С.П.",
          year: 1987,
        },
        {
          id: 7,
          title: "Редких металлов и наноматериалов",
          description:
            "Каждый из выпускников кроме прочных и разносторонних знаний получил навык и почувствовал вкус к научной работе, стал настоящим инженером-исследователем, инженером-творцом, способным в самой совершенной технологии найти и устранить слабые места. Мыслить самостоятельно, искать и находить решения исследовательских задач, постоянно постигать новое – этому учатся студенты кафедры в исследовательских лабораториях.",
          head: "Рычков В.Н.",
          year: 1949,
        },
        {
          id: 8,
          title: "Кафедра радиохимии и прикладной экологии",
          description:
            "Выпускник сможет выполнять научно-исследовательскую деятельность в отраслевых институтах и институтах РАН, производственно-технологическую, проектную и организационно-управленческую деятельность на предприятиях атомной, химической и металлургической промышленности, в органах государственного управления и контроля, педагогическую деятельность в Вузах.",
          head: "Воронина А.В.",
          year: 1951,
        },
        {
          id: 9,
          title: "Физико-химических методов анализа",
          description:
            "Выпускники программы владеют широким набором современных аналитических методов, способны разрабатывать методики анализа любой сложности, обеспечить их метрологическое сопровождение. Магистранты участвуют в научно-исследовательских работах по заказу промышленных предприятий и организаций, выполняют собственные разработки, результаты которых представляются на конференциях различного уровня, публикуются в научной печати.",
          head: "Ребрин О.И.",
          year: 1949,
        },
        {
          id: 10,
          title: "Инноватики и ИС",
          description:
            "В настоящее время научные направления кафедры инноватики и интеллектуальной собственности связаны в основном с прикладными исследованиями, результаты которых ориентированы на развитие региональных и корпоративных инновационных систем и предназначены для использования в практике промышленных предприятий, университетов и компаний Уральского региона.",
          head: "Шульгин Д.Б.",
          year: 2000,
        },
      ],
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
.departments {
  margin: 0 10px;
  background-color: $additional-color-2;
  border-radius: 20px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    margin-bottom: 100px;
  }
  & .container {
    padding: 25px 10px;
    @media screen and (min-width: 1024px) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  &__top {
    @media screen and (min-width: 1024px) {
      margin-bottom: 80px;
      display: flex;
      justify-content: space-between;
    }
  }
  &__header {
    margin-bottom: 30px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
  }
  & .swiper {
    display: flex;
    width: 280px;
    color: #0f0d0e;
    overflow: inherit !important;
    @media screen and (min-width: 768px) {
      width: 580px;
    }
    @media screen and (min-width: 1024px) {
      width: 970px;
    }
    @media screen and (min-width: 1200px) {
      width: 1170px;
    }
    & .swiper-button-next,
    & .swiper-button-prev {
      --swiper-navigation-color: #007aff;
    }
  }
}

.slide {
  background-color: #f9f4da;
  border-radius: 10px;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #0f0d0e;
    padding: 15px;
    height: 42px;
    text-align: center;
    & h4 {
      text-align: center;
      font-size: $fz;
      @media screen and (min-width: 1024px) {
        font-size: $fz-l;
      }
      @media screen and (min-width: 1200px) {
        font-size: $fz-xl;
      }
    }
  }

  &__description {
    font-size: $fz-s;
    padding: 15px;
    height: 250px;
    @media screen and (min-width: 1024px) {
      font-size: $fz-s;
      line-height: 1.3;
    }
    @media screen and (min-width: 1024px) {
      font-size: $fz;
      line-height: 1.5;
    }
  }

  &__footer {
    background-color: $main-color-2;
    padding: 15px 15px 30px 50px;
    border-radius: 0 0 10px 10px;
    font-size: $fz-s;
    position: relative;
    @media screen and (min-width: 1024px) {
      font-size: $fz;
    }
    &_head {
      margin-bottom: 13px;

      &::before {
        content: "";
        position: absolute;
        top: 14px;
        left: 20px;
        height: 18px;
        width: 18px;
        background: url(../assets/icons/person.svg);
        background-size: cover;
        @media screen and (min-width: 1024px) {
          height: 20px;
          width: 20px;
        }
      }
    }
    &_year::before {
      content: "";
      position: absolute;
      top: 46px;
      left: 20px;
      height: 18px;
      width: 18px;
      background: url(../assets/icons/calendar-date.svg);
      background-size: cover;
      @media screen and (min-width: 1024px) {
        top: 48px;
        height: 20px;
        width: 20px;
      }
    }
  }
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
