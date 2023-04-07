<template>
  <div class="administration">
    <div class="container">
      <h2 class="administration__header">Администрация института</h2>
      <div class="administration__cards">
        <div
          class="card"
          :class="card.class"
          v-for="card in moreCards"
          :key="card.id"
        >
          <img
            :src="require(`../assets/img/contacts/${card.src}`)"
            :alt="card.name"
            class="card__photo"
            :class="card.classPhoto"
          />
          <div class="card__content">
            <div class="card__info">
              <p class="card__name">{{ card.name }}</p>
              <p class="card__post">{{ card.post }}</p>
              <p class="card__academic-degree">
                {{ card.degree }}
              </p>
            </div>
            <div class="card__contacts">
              <p class="card__office">Аудитория: {{ card.office }}</p>
              <p class="card__phone">
                Телефон:&nbsp;
                <a :href="'tel:' + card.phone" class="phone">{{
                  card.phone
                }}</a>
              </p>
              <p class="card__mail" v-if="card.email">
                Электронная почта:&nbsp;
                <a :href="'mailto:' + card.email" class="mail">{{
                  card.email
                }}</a>
              </p>
            </div>
          </div>
        </div>
        <div class="administration__btns">
          <button-u-i
            ref="show-more"
            class="administration__show-more"
            @click="showMorePhotos"
            >Показать еще</button-u-i
          >
          <button-u-i
            ref="show-all"
            class="administration__show-all"
            @click="showAllPhotos"
            >Показать всё</button-u-i
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from "@/components/UI/ButtonUI";
export default {
  name: "ContactsAdministration",
  components: { ButtonUI },
  data() {
    return {
      cards: [
        {
          id: 1,
          src: "Иванов.jpg",
          name: "Иванов Владимир Юрьевич",
          post: "Директор ФТИ",
          degree:
            "канд. физ.-мат. наук, заведующий кафедрой экспериментальной физики",
          office: "Ф-209",
          phone: "+7 (343) 375-41-51",
          email: "v.ivanov@urfu.ru",
          class: "director",
          classPhoto: "director-photo",
        },
        {
          id: 2,
          src: "Ярина.png",
          name: "Ярина Елена Борисовна",
          post: "Помощник директора",
          office: "Ф-209",
          phone: "+7 (343) 375-41-54",
          email: "eb.yarina@urfu.ru",
        },
        {
          id: 3,
          src: "Байтимиров.jpg",
          name: "Байтимиров Дамир Рафисович",
          post: "Заместитель директора по общим вопросам",
          degree:
            "канд. физ.-мат. наук, доцент кафедры физики высокоэнергетических процессов",
          office: "Ф-206",
          phone: "+7 (343) 375-94-97",
          email: "d.r.bajtimirov@urfu.ru",
        },
        {
          id: 4,
          src: "Щетинский.jpg",
          name: "Щетинский Андрей Валерьевич",
          post: "Заместитель директора по образованию",
          degree:
            "канд. хим. наук, доцент кафедры редких металлов и наноматериалов",
          office: "Ф-207",
          phone: "+7 (343) 375-41-55",
          email: "a.v.shchetinsky@urfu.ru",
        },
        {
          id: 5,
          src: "Анцыгин.jpg",
          name: "Анцыгин Игорь Николаевич",
          post: "Заместитель директора по науке и инновациям",
          degree:
            "канд. физ.-мат. наук, доцент кафедры экспериментальной физики",
          office: "Ф-206",
          phone: "+7 (343) 375-94-97",
          email: "i.n.antsygin@urfu.ru",
        },
        {
          id: 6,
          src: "Нархов.jpg",
          name: "Нархов Евгений Дмитриевич",
          post: "Начальник отдела организации учебной работы",
          degree:
            "научный сотрудник НИЛ квантовой магнитометрии, зам. председателя Оргкомитета конференций ФТИ",
          office: "Ф-207",
          phone: "+7 (343) 375-41-55",
          email: "narhoved@urfu.ru",
        },
        {
          id: 7,
          src: "Белов.jpg",
          name: "Белов Антон Александрович",
          post: "Заместитель начальника отдела организации учебной работы, начальник управления по социальной и воспитательной работе УрФУ",
          office: "Ф-207 (с 13:30 до 15:00)",
          phone: "+7 (343) 375-41-55",
          email: "a.a.belov@urfu.ru",
        },
        {
          id: 8,
          src: "Макарова.jpg",
          name: "Макарова Ирина Евгеньевна",
          post: "Заместитель начальника отдела, старший диспетчер отдела организации учебной работы",
          office: "Ф-216",
          phone: "+7 (343) 375-95-37",
          email: "makarova.irina@urfu.ru",
        },
        {
          id: 9,
          src: "Карташова.jpg",
          name: "Карташова Елена Сергеевна",
          post: "Старший инспектор отдела организации учебной работы",
          office: "Ф-216",
          phone: "+7 (343) 375-95-37",
          email: "e.s.kartashova@urfu.ru",
        },
        {
          id: 10,
          src: "Доманова.jpg",
          name: "Доманова Мария Евгеньевна",
          post: "Делопроизводитель отдела организации учебной работы",
          office: "Ф-207 (с 13:30 до 15:00)",
          phone: "+7 (343) 375-41-55",
        },
        {
          id: 11,
          src: "Хасанова.jpg",
          name: "Хасанова Аделина Салаватовна",
          post: "Ведущий специалист по работе со студентами",
          office: "Ф-207 (с 13:30 до 15:00)",
          phone: "+7 (343) 375-41-55",
          email: "a.s.khasanova@urfu.ru",
        },
        {
          id: 12,
          src: "Смирнов.jpg",
          name: "Смирнов Андрей Алексеевич",
          post: "Ответственный секретарь отборочной комиссии ФТИ",
          degree:
            "канд. физ.-мат. наук, доцент кафедры экспериментальной физики",
          office: "Ф-352",
          phone: "+7 (964) 489-88-74",
          email: "a.a.smirnov@urfu.ru",
        },
        {
          id: 13,
          src: "Павлов.jpg",
          name: "Павлов Егор Сергеевич",
          post: "Специалист по организации воспитательной работы и работе с общежитиями ФТИ",
          office: "Ф-206 (с 13:30 до 15:00)",
          phone: "+7 (343) 375-94-97",
          email: "e.s.pavlov@urfu.ru",
        },
        {
          id: 14,
          src: "Улитин.png",
          name: "Улитин Николай Владимирович",
          post: "Помощник директора по вопросам физической культуры и спорта",
          degree: "Старший преподаватель кафедры физической культуры ИФКСиМП",
          office: "Ф-207",
          phone: "+7 (343) 374-54-38",
          email: "n.v.ulitin@urfu.ru",
        },
        {
          id: 15,
          src: "Гаймбихнер.jpg",
          name: "Гаймбихнер Владимир Валерьянович",
          post: "Начальник отдела по общим вопросам, системный администратор ФТИ",
          office: "Ф-206",
          phone: "+7 (343) 375-94-97",
          email: "v.v.gaimbikhner@urfu.ru",
        },
        {
          id: 16,
          src: "Филиппов.jpg",
          name: "Филиппов Александр Васильевич",
          post: "Заместитель начальника отдела по общим вопросам",
          office: "Ф-121",
          phone: "+7 (343) 375-46-56",
          email: "av.filippov@urfu.ru",
        },
        {
          id: 17,
          src: "Чусова.jpg",
          name: "Чусова Лариса Александровна",
          post: "Заместитель начальника отдела по общим вопросам",
          office: "Ф-202",
          phone: "+7 (343) 375-44-04",
          email: "l.a.chusova@urfu.ru",
        },
        {
          id: 18,
          src: "Подшивалов.jpg",
          name: "Подшивалов Алексей Павлович",
          post: "Программист отдела по общим вопросам",
          office: "Ф-206",
          phone: "+7 (343) 375-94-97",
          email: "a.p.podshivalov@urfu.ru",
        },
        {
          id: 19,
          src: "Ковалева.jpg",
          name: "Ковалева Людмила Аркадьевна",
          post: "Документовед отдела по общим вопросам",
          office: "Ф-418",
          phone: "+7 (343) 375-44-71",
          email: "l.a.kovaleva@urfu.ru",
        },
      ],
      showMore: 0,
      showAll: false,
    };
  },
  methods: {
    showMorePhotos() {
      this.showMore++;
      if (this.showMore === 2) {
        this.hideBtns();
      }
    },
    showAllPhotos() {
      this.showAll = true;
      this.hideBtns();
    },
    hideBtns() {
      document.querySelector(".administration__btns").classList.add("hidden");
    },
  },
  computed: {
    moreCards() {
      if (this.showAll === true) {
        return this.cards;
      } else {
        let sliceCount = 7 + 6 * this.showMore;
        return this.showMore === 2
          ? this.cards
          : this.cards.slice(0, sliceCount);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.administration {
  margin-bottom: $mn * 10;
  @media screen and (min-width: 1024px) {
    margin-bottom: $mn * 20;
  }
  &__header {
    text-align: center;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    @media screen and (min-width: 768px) {
      gap: 40px 20px;
    }
    @media screen and (min-width: 1024px) {
      gap: 50px 30px;
    }
    @media screen and (min-width: 1200px) {
      gap: 50px;
    }
  }
  &__btns {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-evenly;
  }
  &__show-more,
  &__show-all {
    width: 140px;
    transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
    cursor: pointer;
    user-select: none;
    @media screen and (min-width: 1024px) {
      width: 180px;
    }
    &:hover {
      color: #0f0d0e;
      background-color: #fcba28;
    }
  }
}

.card {
  display: flex;
  gap: 15px;
  @media screen and (min-width: 768px) {
    width: 330px;
  }
  @media screen and (min-width: 1024px) {
    width: 470px;
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 560px;
  }
  &__photo {
    height: 150px;
    border-radius: 10px;
    box-shadow: 3px 3px #fcba28;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__info {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 200px;
    flex-direction: column;
    font-size: $fz;
    @media screen and (max-width: 390px) {
      max-height: 260px;
    }
    @media screen and (min-width: 1024px) {
      font-size: $fz-m;
      gap: 15px;
    }
  }
  &__name {
    font-weight: bold;
    font-size: $fz-m;
    @media screen and (min-width: 768px) {
      font-size: $fz-l;
    }
  }

  &__post {
    font-weight: 500;
  }

  &__academic-degree {
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: auto;
    justify-content: flex-end;
    margin-left: -5px;
    padding-left: 5px;
    border-left: 1px solid #fcba28;
    font-size: $fz;
    @media screen and (min-width: 768px) {
      padding-left: $pg * 2;
    }
    @media screen and (min-width: 1024px) {
      font-size: $fz-m;
      gap: 15px;
    }
  }
  &__phone a,
  &__mail a {
    color: #f9f4da;
  }
  &__office::before {
    background: url(../assets/icons/door-closed_yellow.svg);
    background-size: contain;
  }
  &__phone::before {
    background: url(../assets/icons/telephone_yellow.svg);
    background-size: contain;
  }
  &__mail::before {
    background: url(../assets/icons/envelope_yellow.svg);
    background-size: contain;
  }
  &__office,
  &__phone,
  &__mail {
    position: relative;
    padding-left: $pg * 5;
    display: flex;
    flex-wrap: wrap;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 17px;
      width: 17px;
      @media screen and (min-width: 1024px) {
        height: 22px;
        width: 22px;
      }
    }
    @media screen and (min-width: 1024px) {
      padding-left: $pg * 6;
    }
  }
}

.hidden {
  display: none;
  margin: 0;
}

.director {
  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 50px;
    & .card__name {
      font-size: $fz-xxl;
    }
    & .card__post,
    & .card__academic-degree {
      font-size: $fz-m;
    }
  }
  @media screen and (min-width: 1024px) {
    & .card__post,
    & .card__academic-degree {
      font-size: $fz-l;
    }
    & .card__info,
    & .card__contacts {
      gap: 20px;
    }
  }
}

.director-photo {
  height: 186px;
  border-radius: 10px;
  box-shadow: 3px 3px #fcba28;
  @media screen and (min-width: 768px) {
    height: 250px;
  }
  @media screen and (min-width: 1024px) {
    height: 300px;
  }
}
</style>
