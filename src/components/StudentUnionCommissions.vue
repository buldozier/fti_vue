<template>
  <div class="commissions-inner">
    <div class="container">
      <div class="commissions">
        <div
          class="commission"
          v-for="commission in commissions"
          :key="commission.id"
        >
          <div class="commission__title" @click="changeBlockHeight">
            {{ commission.title }}
          </div>
          <div class="commission__main" @click.stop>
            <div class="commission__text">
              <div class="commission__about">
                <div class="commission__header">Немного о комиссии</div>
                <div class="commission__text">{{ commission.text }}</div>
              </div>
            </div>
            <img
              :src="
                require(`../assets/img/student_union/commissions/${commission.src}/commission.jpg`)
              "
              alt="Фото комиссии"
            />
            <img
              :src="
                require(`../assets/img/student_union/commissions/${commission.src}/poster.jpg`)
              "
              alt="Афиша мероприятия"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentUnionCommissions",
  data() {
    return {
      commissions: [
        {
          id: 1,
          title: "Спортивно-массовая комиссия",
          text: "СМК занимается организацией и проведением спортивно-массовых мероприятий: спортивные игры (футбол, стрибол, волейбол, настольный теннис, боулинг и т.д.), квесты, выходы на природу, кроссы. СМК отвечает за организацию сборных по разным видам спорта, которые защищают честь физтеха. В спорте много жизни и много направлений!",
          src: "СМК",
        },
        {
          id: 2,
          title: "Учебно-научная комиссия",
          text: 'УНК организует интеллектуальные игры ("Что? Где? Когда?", игра на знание кинематографа "Катакана", "Самый умный первокурсник", "Brain Battle"). Реализует проект “Лекторий ФизТеха”при поддержке канала “Химия - просто” (открытые лекции, на которых преподаватели ФТИ дают материал языком, понятным для всех, проводят опыты и ставят эксперименты) и научную молодежную конференцию “Физика.Технологии.Инновации”. Также комиссия организует экскурсии на предприятия и выставки.',
          src: "УНК",
        },
        {
          id: 3,
          title: "Культурно-массовая комиссия",
          text: "Самое яркое событие для КМК — «Дебют Первокурсников». Каждый год они встречают первокурсников и раскрывают их таланты, помогают познакомиться с институтом. Комиссия помогает продумывать сценарии, придумывать шутки, редактирует номера групп. Еще одно масштабное мероприятие — «Бенефис». Объединившись с другим институтом по жеребьевке, пара институтов ставит номер на сцене ГУКа на 30 минут. Это требует много сил, креативности и ответственности.",
          src: "КМК",
        },
        {
          id: 4,
          title: "Организационно-массовая комиссия",
          text: "Основная деятельность комиссии — это работа с профсоюзной организацией университета: сбор взносов, выдача и продление профсоюзных билетов. Ежегодная цель — это добиться 100% «вступаемости» студентов всех курсов в профсоюз. Также в комиссии много работы с документацией, оформлением служебных записок, организацией ОВК (отчетно-выборочная конференция), регистрация участников на мероприятиях. В общем, много-много всего супер важного!",
          src: "ОМК",
        },
        {
          id: 5,
          title: "Социально-правовая комиссия",
          text: "Основная деятельность комиссии - это материальная поддержка. Она включает в себя сбор документов у студентов, а затем формирование их для передачи стипендиальной комиссии. Так же СПК занимается благотворительной деятельностью. Например, каждый год ездит в Полевской детский дом, для детей из которого предварительно устраивает сбор подарков от студентов ФТИ.",
          src: "СПК",
        },
        {
          id: 6,
          title: "Жилищно-бытовая комиссия",
          text: "Функционал комиссии можно описать такими словами, как «селим, расселяем, переселяем, не селим, выселяем (со всеми вытекающими из этого документами)». ЖБК является неким проводником между заведующими общежития , физтехом и администрацией института, участвует в организации слётов и мероприятий, помогает студентам, в особенности первокурсникам, с поселением в общежитие.",
          src: "ЖБК",
        },
        {
          id: 7,
          title: "Информационная комиссия",
          text: "Благодаря ИК вы узнаете обо всех мероприятиях и новостях, ведь это они работают с группой союза студентов, они выкладывают все посты и разрабатывают весь контент план. Фотографы комиссии снимают все мероприятия союза студентов и делают вам потрясающие аватарки, а дизайнеры рисуют красивые афиши, которые украшают не только группу в ВК. 72 - столько афиш, которые сделали наши дизайнеры, висит в кабинете союза студентов ФТИ.",
          src: "ИК",
        },
        {
          id: 8,
          title: "Комиссия по работе с волонтерами",
          text: "Комиссия занимается организацией мероприятий и помогает проводить мероприятия разных масштабов: от институтских до международных. Для студентов это возможность участвовать в студенческой жизни, знакомиться с новыми людьми, быть всегда на самых больших событиях в универе, повышать свое умение в общении и дисциплине, жить в коллективе. Комиссия работает по плану мероприятий, регистрирует участников, следит за комфортом волонтеров, таймингом.",
          src: "КОРСВ",
        },
        {
          id: 9,
          title: "Комиссия по работе с наставниками",
          text: "Наставник в студенческой среде – студент старших курсов, который помогает адаптироваться первокурсникам в студенческой жизни. Этот человек оказывает помощь в учебе и других возникающих проблемах, передает свой студенческий опыт. И именно деятельность студента под руководством лидера-наставника – это залог профессионального роста и высоких результатов.",
          src: "КОРСН",
        },
        {
          id: 10,
          title: "Комиссия по работе с партнерами",
          text:
            "Коммуникабельность. Рисковость. Предприимчивость. Этими качествами должен обладать каждый, кто хочет добиться успеха. Любишь общение, ответственный и не боишься преодолевать свои страхи? Тогда тебе к нам!\n" +
            "Мы занимаемся поиском финансирования для ФТИ, в процессе чего общаемся с представителями различных компаний города.\n",
          src: "КРП",
        },
        {
          id: 11,
          title: 'Проект "Role play"',
          text: "Объединение, создающее ролевые игры разных форматов. Проект занимается квестами, патигеймами, аналогами мафии, а также полноценными ролевыми. Помимо активностей на физтехе, проект вырос в полноценную организацию и теперь делает мероприятия на весь УрФУ.",
          src: "RP",
        },
      ],
    };
  },
  methods: {
    changeBlockHeight() {
      const mainEl = event.target.closest(".commission");
      const contentEl = mainEl.querySelector(".commission__main");

      if (!mainEl.classList.contains("open")) {
        document.querySelectorAll(".open").forEach((el) => {
          el.classList.remove("open");
          el.querySelector(".commission__main").classList.remove(
            "commission-open"
          );
          el.querySelector(".commission__main").style.maxHeight = null;
        });
      }

      this.toggleClassList(mainEl);

      if (contentEl.style.maxHeight) {
        contentEl.style.maxHeight = null;
      } else {
        contentEl.style.maxHeight = contentEl.scrollHeight + "px";
      }
    },
    toggleClassList(el) {
      el.classList.toggle("open");
      el.querySelector(".commission__main").classList.toggle("commission-open");
    },
  },
};
</script>

<style lang="scss" scoped>
.commissions {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fcba28;
  color: #0f0d0e;
  border-radius: 10px;
}

.commission {
  & + & &__title {
    border-top: 1px solid #0f0d0e;
  }
  &__title {
    padding: $pg * 2;
    font-weight: bold;
    position: relative;
    cursor: pointer;
    @media screen and (min-width: 1024px) {
      padding: $pg * 3;
    }
    &::after {
      content: "";
      position: absolute;
      top: 8px;
      right: 10px;
      background: url(../assets/icons/chevron.svg);
      transform: rotate(180deg);
      background-size: cover;
      width: 20px;
      height: 20px;
      transition: transform 0.2s ease-in-out;
      @media screen and (min-width: 1024px) {
        width: 30px;
        height: 30px;
        top: 10px;
        right: 20px;
      }
    }
  }
  &__main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 $pg * 3;
    background-color: #f9f4da;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    max-height: 0;
    opacity: 0;
    box-shadow: inset 0 2px 5px #0f0d0e, inset 0 -2px 5px #0f0d0e;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      gap: 20px;
      padding: 0 $pg * 4;
      max-height: 0;
      font-size: $fz-m;
    }
    & img {
      @media screen and (min-width: 768px) {
        margin: auto 0;
      }
      &:first-of-type {
        max-width: 340px;
        height: auto;
        border-radius: 10px;
        @media screen and (min-width: 768px) {
          width: 360px;
          order: 2;
        }
        @media screen and (min-width: 1024px) {
          width: 360px;
          order: 1;
        }
      }
      &:last-of-type {
        max-width: 170px;
        border-radius: 10px;
        margin: auto;
        @media screen and (min-width: 768px) {
          width: 170px;
          order: 3;
        }
        @media screen and (min-width: 1024px) {
          width: 170px;
          order: 3;
        }
      }
    }
  }
  &__header {
    font-weight: bold;
    margin-bottom: $mn * 2;
  }
  &__text {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      order: 1;
    }
    @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      width: 350px;
      order: 2;
    }
    @media screen and (min-width: 1200px) {
      width: 560px;
    }
  }
}
.open + .commission {
  border: none;
}

.open .commission__title::after {
  transform: rotate(0deg);
}

.commission-open {
  padding: $pg * 3;
  opacity: 1;
  @media screen and (min-width: 1024px) {
    padding: $pg * 4;
  }
}
</style>
