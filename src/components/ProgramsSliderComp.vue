<template>
  <div class="programs-slider">
    <div class="container">
      <div class="program-slider__top">
        <div class="program-slider__top_content">
          <h2 class="programs-slider__header">Направления подготовки</h2>
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
        <div class="slider-buttons">
          <button class="swiper-button-prev">
            <img src="../assets/icons/arrow-up-short_1.svg" alt="Назад" />
          </button>
          <button class="swiper-button-next">
            <img src="../assets/icons/arrow-up-short_1.svg" alt="Вперед" />
          </button>
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
          v-for="programBak in programsBak"
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
              <button-u-i class="swiper-slide__button">
                <a :href="programBak.link">
                  <p>Подробнее о направлении</p>
                </a>
              </button-u-i>
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
          v-for="programMag in programsMag"
          :key="programMag.id"
        >
          <div class="swiper-slide__card">
            <div class="swiper-slide__title">
              <div
                class="swiper-slide__title_header"
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
                  <a :href="subject" target="_blank">
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
              <button-u-i class="swiper-slide__button">
                <a :href="programMag.link">
                  <p>Подробнее о направлении</p>
                </a>
              </button-u-i>
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

export default {
  name: "ProgramsSliderComp",
  components: { ButtonUI, Swiper, SwiperSlide },
  data() {
    return {
      isSwiperBakalavr: true,
      isLaptopSize: null,
      slidesPerSlide: 1,
      programsBak: [
        {
          id: 1,
          title: "Прикладные математика и физика",
          stage: "Бакалавриат",
          code: "03.03.01",
          description: [
            "Программирование и обучение нейронных сетей на суперкомпьютере",
            "Разработка новых технологий и алгоритмов для квантовых вычислений",
            "Использование квантового компьютера для создания алгоритмов шифрования",
            "Изучение методов машинного обучения и их применение к решению широкого спектра физических задач",
          ],
          places: 25,
          score: 181,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/10139/",
        },
        {
          id: 2,
          title: "Информационные системы и технологии",
          stage: "Бакалавриат",
          code: "09.03.02",
          description: [
            "Проектирование, сборка и анализ Big Data",
            "Визуализация результатов обработки данных на дашбордах",
            "Разработка моделей и алгоритмов машинного обучения",
            "Интеграция ML-решений в системы CRM и бизнес-процессов компании",
            "Создание информационных систем среднего и крупного масштаба и сложности",
          ],
          places: 45,
          score: 214,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9952/",
        },
        {
          id: 3,
          title: "Электроника и наноэлектроника",
          stage: "Бакалавриат",
          code: "11.03.04",
          description: [
            "Разработка и изготовление электронных приборов различного назначения",
            "Проведение исследования физико-химических свойств материалов электроники и наноэлектроники",
            "Моделирование материалов с заданными свойствами для элементов электронной техники",
            "Синтез новых функциональных и конструкционных материалов",
          ],
          places: 50,
          score: 159,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9955/",
        },
        {
          id: 4,
          title: "Приборостроение",
          stage: "Бакалавриат",
          code: "12.03.01",
          description: [
            "Проектирование и изготовление приборов дефектоскопии",
            "Выполнение неразрушающего контроля готовой продукции",
            "Управление процессами контроля качества",
            "Проведение исследований в области неразрушающего контроля",
            "Разработка приборов для контроля качества, а так же применение уже готовые соедств для контроля сырья или готовой продукции",
          ],
          places: 25,
          score: 155,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9957/",
        },
        {
          id: 5,
          title: "Биотехнические системы и технологии",
          stage: "Бакалавриат",
          code: "12.03.04",
          description: [
            "Физические основы термоядерного синтеза и принципы работы ядерного реактора",
            "Решение сложных задач теоретической физики методами математического моделирования",
            "Использование уникального лабораторного оборудования и ядерно-физических установок в своих научных проектах",
            "Разработка и изготовление электронных приборов специального назначения",
          ],
          places: 58,
          score: 151,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9959/",
        },
        {
          id: 6,
          title: "Ядерные физика и технологии",
          stage: "Бакалавриат",
          code: "14.03.02",
          description: [
            "Разработка, производство и осуществление сервисного обслуживание медицинской техники",
            "Исследование влияния радиационной обработки на пищевую продукцию",
            "Моделирование биологических процессов и системы",
            "Управление состоянием живых систем, обеспечение их жизнедеятельности, а также поддержание оптимальных условий трудовой деятельности человека",
          ],
          places: 25,
          score: 167,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9962/",
        },
        {
          id: 7,
          title: "Ядерные реакторы и материалы",
          stage: "Специалитет",
          code: "14.05.01",
          description: [
            "Проектирование ядерных реакторов",
            "Использование физических методов разделения изотопов",
            "Исследование взаимодействия излучения с объектами живой и неживой природы",
            "Моделирование и исследование процессов в ядерном реакторе и материалах",
            "Управление системами безопасности на АЭС",
          ],
          places: 30,
          score: 153,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9944/",
        },
        {
          id: 8,
          title: "Электроника и автоматика физических установок",
          stage: "Специалитет",
          code: "14.05.04",
          description: [
            "Проектирование и воплощение электроники высокого уровня",
            "Разработка автоматизированных систем управления гражданского и военного назначения",
            "Обеспечение полного жизненного цикла аппаратуры собственного производства",
            "Проведение фундаментальных исследований детекторных материалов",
          ],
          places: 35,
          score: 151,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/10332/",
        },
        {
          id: 9,
          title: "Химическая технология",
          stage: "Бакалавриат",
          code: "18.03.01",
          description: [
            "Создание уникальных химических установок",
            "Разработка и внедрение новых химических технологий",
            "Моделирование, синтез и исследование свойств материалов",
            "Управление химическим производством",
            "Работа на современном аналитическом оборудовании",
            "Разработка новых методик анализа",
            "Планирование аналитического сопровождения производств",
          ],
          places: 60,
          score: 126,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Химия", class: "chemistry" },
          ],
          link: "https://programs.edu.urfu.ru/ru/10074/",
        },
        {
          id: 10,
          title: "Химическая технология материалов современной энергетики",
          smallTitle: "small-title",
          stage: "Специалитет",
          code: "18.05.02",
          description: [
            "Определение стратегии разработки и исследования новых материалы",
            "Управление производством редких металлов",
            "Создавание уникальных химических установок",
            "Проводение расчетов химико-технологических процессов",
            "Исследование механизмов химических реакций",
          ],
          places: 32,
          score: 175,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Химия", class: "chemistry" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/10333/",
        },
        {
          id: 11,
          title: "Управление качеством",
          stage: "Бакалавриат",
          code: "27.03.02",
          description: [
            "Создание и непрерывное совершенствование систем управления качеством",
            "Внедрение систем бережливого производства",
            "Анализ и совершенствование бизнес-процессов",
            "Проведение аудита качества и экспертной оценки систем менеджмента качества",
          ],
          places: 25,
          score: 202,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/10140/",
        },
        {
          id: 12,
          title: "Инноватика",
          stage: "Бакалавриат",
          code: "27.03.05",
          description: [
            "Управление инновационными проектами и инновационной деятельностью на уровне предприятия, региона и государств",
            "Проведение экспертизы инновационных проектов и объектов интеллектуальной собственности",
            "Определение стратегий защиты интеллектуальной собственности",
            "Осуществление бизнес-аналитики и консалтинга в сфере инновационной деятельности",
          ],
          places: 35,
          score: 221,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9966/",
        },
        {
          id: 13,
          title: "Наноинженерия",
          stage: "Бакалавриат",
          code: "28.03.02",
          description: [
            "Моделирование, проектирование и изготовление приборов, систем и их элементов с использованием наноматериалов и нанотехнологий",
            "Внедрение новых процессов для направленной модификации наноматериалов и наноструктур",
            "Исследование свойств нанообъектов и изделий на их основе",
            "Выполнение контроля инновационной продукции наноиндустрии",
          ],
          places: 50,
          score: 148,
          subjects: [
            { name: "Математика", class: "math" },
            { name: "Русский язык", class: "russian" },
            { name: "Физика", class: "physics" },
            { name: "Информатика", class: "informatics" },
          ],
          link: "https://programs.edu.urfu.ru/ru/9968/",
        },
      ],
      programsMag: [
        {
          id: 1,
          title: "Математическая физика и математическое моделирование",
          code: "03.04.01",
          description:
            "Изучение методов математической физики, современных компьютерных алгоритмов моделирования электронной структуры, магнитных взаимодействий новых функциональных материалов с использованием параллельных архитектур и нейросетевых технологий. Часть времени посвящена изучению квантовых явлений, квантовых алгоритмов и квантовых устройств. В рамках проведения научно-исследовательских работ магистры кафедры направляются на 2-3 месячные стажировки в университеты Германии, Голландии, Швейцарии и других стран.",
          places: 15,
          subjects: [
            "../assets/docs/Документы Союз студентов/Blank_zayavleniy_na_mat_pomosch_v_FTI.docx",
          ],
          link: "https://programs.edu.urfu.ru/ru/10141/",
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
    setProgramsType(type) {
      type === "bak"
        ? (this.isSwiperBakalavr = true)
        : (this.isSwiperBakalavr = false);
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
.slider-hidden {
  display: none !important;
}

.programs-slider {
  margin-left: 15px;
  margin-right: 15px;
  background-color: #231f20;
  border-radius: 20px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
  & .container {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    &_content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
    }
  }
  &__header {
    margin-bottom: 0;
  }
  &__buttons {
    display: flex;
    justify-content: space-evenly;
    font-size: 12px;
    margin: $mn * 4 0;
  }
  &__button {
    color: #fcba28;
    padding: 10px;
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
  overflow: inherit !important;
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
    padding: 15px 15px 0 15px;
    &_header {
      display: flex;
      text-align: center;
      height: 60px;
      & h4 {
        margin: auto;
      }
    }
    &_bottom {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 12px;
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
    &_magistr {
      padding: $pg * 3;
      font-size: $fz-s;
    }
  }
  &__footer {
    display: flex;
    gap: 10px;
    height: 130px;
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
    width: 114px;
    gap: 10px;
    line-height: 1;
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
    &_magistr {
      display: flex;
      flex-wrap: wrap;
      gap: 2px;
      flex: 1;
    }
  }
  &__subject {
    margin-right: auto;
    height: 15px;
    line-height: 1.2;
    padding: $pg $pg * 2;
    border-radius: 10px;
    color: #f9f4da;
    font-size: 12px;
    &_magistr {
      margin: 0;
      height: 24px;
    }
  }
  &__button-block {
    padding-bottom: $pg * 6;
  }
  &__button {
    border-color: $background-color;
    margin: 0 auto 0 $mn * 3;
    height: 40px;
    padding: 0 $pg;
    & a {
      color: $text-color-2;
      text-decoration: none;
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
</style>
