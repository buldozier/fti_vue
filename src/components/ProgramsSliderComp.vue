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
          v-for="programMag in programsMag"
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
            "03.04.01.pdf?alt=media&token=52108f02-9c2c-47cf-b2a0-e315848d2a51",
          ],
          link: "https://programs.edu.urfu.ru/ru/10141/",
        },
        {
          id: 2,
          title: "Информационно-интеллектуальные системы в бизнесе",
          code: "09.04.02",
          description:
            "Подготовка инженерно-технических работников для профессиональной деятельности в области разработки и внедрения информационно-интеллектуальных технологий и систем, ориентированных на бизнеспроцессы в любой сфере народного хозяйства. Полученные профессиональные компетенции в области организации производства и технологического предпринимательства дают возможность выпускникам программы работать в сфере малого бизнеса, самостоятельно организовать инновационное производство новой востребованной на рынке продукции.",
          places: 15,
          subjects: [
            "09.04.02_1.pdf?alt=media&token=6b36d941-6289-4bde-98b8-a0f1aa7a6a0a",
            "09.04.02_2.pdf?alt=media&token=d2810459-b05f-4830-ae40-9c677b76625e",
          ],
          link: "https://programs.edu.urfu.ru/ru/9969/",
        },
        {
          id: 3,
          title: "Материалы микро- и наноэлектроники",
          code: "11.04.04",
          description:
            "Фундаментальное и инженерное образование, которое позволит активно участвовать в разработке и внедрении наноэлектронных приборов. Спецпрактикумы по методам получения и диагностики функциональных материалов для электронной техники организованы в НОЦ «Наноматериалы и нанотехнологии», а также лабораториях институтов УрО РАН. Проектирование устройств микро- и наноэлектроники различного назначения. Организация технологических процессов производства приборов и компонентной базы электроники.",
          places: 10,
          subjects: [
            "11.04.04_1.pdf?alt=media&token=63f0980b-d22e-4c55-8427-f583c897923a",
            "11.04.04_2.pdf?alt=media&token=4005d98d-fc0d-4cff-b054-66831b048e6c",
          ],
          link: "https://programs.edu.urfu.ru/ru/9971/",
        },
        {
          id: 4,
          title: "Физическая электроника",
          code: "11.04.04",
          description:
            "Подготовка высококвалифицированных специалистов в области мощной импульсной энергетики и электроники больших мощностей. Проведение теоретических и экспериментальных исследований в областях сильноточной электроники и импульсной энергетики. Проектирование и конструирование электронных приборов и устройств. Разработка технологий производства установок вакуумной, плазменной, твердотельной, микроволновой, оптической, микро- и наноэлектроники.",
          places: 10,
          subjects: [
            "11.04.04_1.pdf?alt=media&token=63f0980b-d22e-4c55-8427-f583c897923a",
            "11.04.04_2.pdf?alt=media&token=4005d98d-fc0d-4cff-b054-66831b048e6c",
          ],
          link: "https://programs.edu.urfu.ru/ru/9972/",
        },
        {
          id: 5,
          title: "Приборы и методы контроля качества и диагностики",
          code: "12.04.01",
          description:
            "Проектирование приборов и устройств неразрушающего контроля. Организация процессов контроля качества и диагностики материалов, изделий и объектов. Учебные занятия проводятся в НОЦ «Контроль и диагностика современных материалов» ИФМ РАН с привлечением иностранных специалистов и специалистов профильных промышленных предприятий. Практика и НИР организованы в лабораториях институтов УрО РАН и на предприятиях машиностроения, металлургии, нефтегазовой и других отраслей промышленности.",
          places: 10,
          subjects: [
            "12.04.01_1.pdf?alt=media&token=52066fca-5f17-4dfd-ab65-eb671908e908",
            "12.04.01_2.pdf?alt=media&token=314c2479-3c0a-4840-9db0-22223c529a82",
          ],
          link: "https://programs.edu.urfu.ru/ru/9973/",
        },
        {
          id: 6,
          title: "Биомедицинская инженерия",
          code: "12.04.04",
          description:
            "Глубокие знания в области ядерно-физических технологий в медицине и биологии. Научные исследования в медицинских и биологических центрах. Разработка технических средств для диагностических исследований, лечебных и реабилитационных процедур в медицинских центрах. Радиационные технологии в биомедицинской инженерии на базе центра радиационной стерилизации. Обработка биомедицинской информации, создание и эксплуатация медицинских баз данных.",
          places: 10,
          subjects: [
            "12.04.04_1.pdf?alt=media&token=e63b104c-87df-42da-af89-7346165adab3",
            "12.04.04_2.pdf?alt=media&token=04d36c27-dc2b-4745-97b6-3bbec49410ae",
          ],
          link: "https://programs.edu.urfu.ru/ru/9974/",
        },
        {
          id: 7,
          title: "Технологии радиационной безопасности",
          code: "14.04.02",
          description:
            "В распоряжении обучающихся современные ускорительные комплексы, где реализованы технологические процессы по модификации материалов ускоренными электронами и производству радионуклидов медицинского назначения и радиофармацевтических препаратов. Модули специализации: Прикладная метрология ионизирующего излучения, Ядерно-физические установки, Физика взаимодействия ионизирующего излучения с веществом и защита от ионизирующего излучения, Исследовательские ядерные ректоры.",
          places: 10,
          subjects: [
            "14.04.02_1.pdf?alt=media&token=4c94eb87-12e7-4aee-a153-f574d9e95841",
            "14.04.02_2.pdf?alt=media&token=2f44f61e-0605-4276-ba8d-1aa451ae3b4e",
          ],
          link: "https://programs.edu.urfu.ru/ru/10194/",
        },
        {
          id: 8,
          title: "Физика высокоэнергетических процессов",
          code: "14.04.02",
          description:
            "Получение глубоких теоретических знаний в области математического моделирования, физики плазмы, конденсированного состояния вещества, физики высоких плотностей энергии, быстропротекающих процессов, взаимодействия излучения с веществом. Подготовка высококвалифицированных специалистов в области ядерной физики для предприятий атомной и оборонной промышленности, научно-исследовательских организаций.",
          places: 12,
          subjects: [
            "14.04.02_1.pdf?alt=media&token=4c94eb87-12e7-4aee-a153-f574d9e95841",
            "14.04.02_2.pdf?alt=media&token=2f44f61e-0605-4276-ba8d-1aa451ae3b4e",
          ],
          link: "https://programs.edu.urfu.ru/ru/10193/",
        },
        {
          id: 9,
          title: "Аналитический контроль природных и технических объектов",
          code: "18.04.01",
          description:
            "Разрабатка методики анализа любой сложности, обеспечение их метрологического сопровождения. Магистранты участвуют в научно-исследовательских работах по заказу промышленных предприятий и организаций, выполняют собственные разработки. В образовательном и научном процессах задействованы приборы и комплексы ведущих мировых фирм производителей аналитического оборудования.",
          places: 6,
          subjects: [
            "18.04.01_1.pdf?alt=media&token=38ee70cd-95c7-4c5b-883b-fbf2defa7c19",
            "18.04.01_2.pdf?alt=media&token=c0ccc42e-c131-4f84-817a-372bec992431",
          ],
          link: "https://programs.edu.urfu.ru/ru/10122/",
        },
        {
          id: 10,
          title: "Технология редких и редкоземельных элементов",
          code: "18.04.01",
          description:
            "Подготовка к работе в сфере приоритетных направлений развития науки, технологий и техники в России: Рациональное природопользование и энергоэффективность, энергосбережение, ядерная энергетика Технологическая платформа «Замкнутый ядерный топливный цикл с реакторами на быстрых нейтронах» Траектории обучения: Гидрометаллургия редкоземельных элементов (теория сорбционных процессов, технология редкоземельных элементов, химия f-элементов).",
          places: 9,
          subjects: [
            "18.04.01_1.pdf?alt=media&token=38ee70cd-95c7-4c5b-883b-fbf2defa7c19",
            "18.04.01_2.pdf?alt=media&token=c0ccc42e-c131-4f84-817a-372bec992431",
          ],
          link: "https://programs.edu.urfu.ru/ru/10123/",
        },
        {
          id: 11,
          title:
            "Управление экологической безопасностью радиохимических технологий",
          code: "18.04.01",
          description:
            "Образовательные траектории программы: Радиохимические технологии в ядерном топливном цикле и ядерной медицине Обеспечение экологической безопасности производств Радиоэкологический мониторинг и радиохимический анализ. Радиохимические технологии в ядерном топливном цикле. Технологии производства радиоактивных изотопов. Технологии обеспечения экологической безопасности производств.",
          places: 9,
          subjects: [
            "18.04.01_1.pdf?alt=media&token=38ee70cd-95c7-4c5b-883b-fbf2defa7c19",
            "18.04.01_2.pdf?alt=media&token=c0ccc42e-c131-4f84-817a-372bec992431",
          ],
          link: "https://programs.edu.urfu.ru/ru/10121/",
        },
        {
          id: 12,
          title:
            "Материаловедение и технология материалов в атомной энергетике",
          code: "22.04.01",
          description:
            "Подготовка в области современных методов, способов и средств получения и исследования свойств материалов, а также создания, внедрения и эксплуатации промышленных производств материалов и изделий из них. Изучение физико-химических основ технологии получения материалов, исследования свойств материалов, выявление закономерностей «состав-структура-свойство», моделирование и оптимизация технологических процессов.",
          places: 10,
          subjects: [
            "22.04.01_1.pdf?alt=media&token=f9f5c60b-e5a8-431e-acd8-fe765fe086d6",
            "22.04.01_2.pdf?alt=media&token=8469319c-b793-4a9a-a180-7d836fa44ae7",
          ],
          link: "https://programs.edu.urfu.ru/ru/9975/",
        },
        {
          id: 13,
          title: "Техническое регулирование и управление качеством",
          code: "27.04.01",
          description:
            "Установление норм, правил и требований к продукции (услуге). Метрологическое обеспечение, метрологический контроль и надзор. Cистемы управления качеством на основе отечественных и международных стандартов. Научные исследования в области метрологии, стандартизации, сертификации и управления качеством. Все преподаватели специальных дисциплин являются практиками, участвующими в разработке, внедрении и сертификации систем менеджмента качества, интегрированных систем менеджмента на предприятиях Свердловской области.",
          places: 8,
          subjects: [
            "27.04.01_1.pdf?alt=media&token=25029e6d-b273-473b-9d45-40990b209abe",
            "27.04.01_2.pdf?alt=media&token=c0033f78-6436-45b1-a324-4d1f7fad58d4",
          ],
          link: "https://programs.edu.urfu.ru/ru/9976/",
        },
        {
          id: 14,
          title:
            "Управление инновационными проектами и интеллектуальной собственностью",
          code: "27.04.05",
          description:
            "Образовательные траектории: Управление инновационными проектами Управление интеллектуальной собственностью Опыт работы в проектных командах. Практика и обучение на реальных кейсах инновационных проектов и инновационных предприятий. Опыт работы в центре трансфера технологий и центре интеллектуальной собственности УрФУ. Выпускники – специалисты в области предпринимательства, менеджмента и консалтинга, а также в области экспертизы и аналитики.",
          places: 15,
          subjects: [
            "27.04.05_1.pdf?alt=media&token=fd55f733-b374-4704-88e2-88b4beb95f83",
            "27.04.05_2.pdf?alt=media&token=97fad81d-28ca-47d5-ad86-14c217902c08",
          ],
          link: "https://programs.edu.urfu.ru/ru/9977/",
        },
        {
          id: 15,
          title: "Наноинженерия материалов и устройств",
          code: "28.04.02",
          description:
            "Студенты будут осваивать технологии получения новых наноматериалов, способных работать в экстремальных условиях, практически освоят современные методы получения наночастиц и упорядоченных наноструктур, методы зондовой микроскопии и нанолитографии. Студенты получат необходимые знания и умения по разработке, нанообъектов различного назначения. Студенты овладеют методами численных расчетов и моделирования свойств наноматериалов и нанообъектов, приобретут навыки применения прикладного программного обеспечения.",
          places: 8,
          subjects: [
            "28.04.02_1.pdf?alt=media&token=db5e65f5-a077-4d85-8fe7-a620d996db3b",
            "28.04.02_2.pdf?alt=media&token=b1594838-65a4-4c8d-a7f4-5eaded0b0738",
          ],
          link: "https://programs.edu.urfu.ru/ru/10310/",
        },
        {
          id: 16,
          title: "Организация и управление в сфере социальной работы",
          code: "39.04.02",
          description:
            "Оценка эффективности использования финансовых и материальных ресурсов для достижения максимального социального результата. Осуществление проектно-аналитической, экспертно-консультационной и внедренческой деятельности в сфере социальной работы. Принятие оптимальных управленческих решений с использованием ресурсов государства, бизнеса и общества для решения проблем социального благополучия.",
          places: 26,
          subjects: [
            "39.04.02_1.pdf?alt=media&token=4cb837eb-7482-449f-9df0-7db3e0bb9f2f",
            "39.04.02_2.pdf?alt=media&token=6c6cfd6a-cee0-4e72-933a-2721d39d0350",
          ],
          link: "https://programs.edu.urfu.ru/ru/9978/",
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
      &.magistr-header h4 {
        font-size: $fz !important;
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
      height: 282px;
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
