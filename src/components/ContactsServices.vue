<template>
  <div class="services">
    <div class="container">
      <h2 class="services__header">Службы и отделы ФТИ</h2>
      <div class="services__content">
        <div class="services__title">
          <p class="audience">Аудитория</p>
          <p class="specialists">Специалисты</p>
          <p class="competencies">Компетенции</p>
        </div>
        <div class="services__block">
          <div class="service" v-for="service in services" :key="service.id">
            <div class="service__audience">
              <p class="service__header">Аудитория</p>
              <p class="service__room">{{ service.room }}</p>
              <p class="service__phone">
                Телефон:
                <a :href="`tel:${service.phone}}`" class="phone">{{
                  service.phone
                }}</a>
              </p>
              <p v-if="service.hours">{{ service.hours }}</p>
            </div>
            <div class="service__specialists">
              <b class="service__specialists-header">Специалисты</b>
              <ul>
                <li
                  class="service__specialist"
                  v-for="(specialist, index) in service.specialists"
                  :key="index"
                >
                  <b>{{ specialist.name }}</b>
                  <p>
                    {{ specialist.post }}
                  </p>
                </li>
              </ul>
            </div>
            <div class="service__competencies">
              <b class="service__competencies-header">Компетенции</b>
              <ul>
                <li
                  class="service__competence"
                  v-for="(competence, index) in service.competencies"
                  :key="index"
                >
                  {{ competence }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsServices",
  data() {
    return {
      services: [
        {
          id: 1,
          room: "Ф-206",
          phone: "+7 (343) 375-94-97",
          specialists: [
            {
              name: "Байтимиров Дамир Рафисович",
              post: "заместитель директора по общим вопросам, кандидат физико-математических наук, доцент кафедры ФВЭП",
            },
            {
              name: "Гаймбихнер Владимир Валерьянович",
              post: "начальник отдела по общим вопросам, системный администратор ФТИ",
            },
            {
              name: "Подшивалов Алексей Павлович",
              post: "программист отдела по общим вопросам",
            },
            {
              name: "Павлов Егор Сергеевич",
              post: "делопроизводитель отдела организации учебной работы",
            },
          ],
          competencies: [
            "организация финансовой и административно-хозяйственной деятельности Института",
            "техническая поддержка ИТ-инфраструктуры ФТИ",
            "поселение в общежитие",
            "вопросы, связанные с проживанием в общежитии (в т.ч. выдача справок о непоселении первому курсу)",
            "вопросы, касающиеся работы кураторов академических групп",
          ],
        },
        {
          id: 2,
          room: "Ф-207",
          phone: "+7 (343) 375-41-55",
          hours: "Часы приема : 13:30 - 14:30",
          specialists: [
            {
              name: "Щетинский Андрей Валерьевич",
              post: "заместитель директора ФТИ по образованию, кандидат химических наук, доцент кафедры РМиНМ",
            },
            {
              name: "Нархов Евгений Дмитриевич",
              post: "начальник отдела организации учебной работы, научный сотрудник НИЛ квантовой магнитометрии",
            },
            {
              name: "Белов Антон Александрович",
              post: "заместитель начальника отдела организации учебной работы",
            },
            {
              name: "Хасанова Аделина Салаватовна",
              post: "специалист по организации воспитательной работы",
            },
            {
              name: "Доманова Мария Евгеньевна",
              post: "делопроизводитель отдела организации учебной работы",
            },
          ],
          competencies: [
            "процесс обучения",
            "сдачи сессии и академических задолженностей",
            "вопросы, касающиеся работы старост академических групп",
            "заявления о пропуске пар по уважительной причине",
            "утеря, изъятие студенческого билета",
            'выдача "хвостовок"',
            "вопросы о переводе, отчислении",
            "именные стипендии",
          ],
        },
        {
          id: 3,
          room: "Ф-208",
          phone: "+7 (343) 375-47-82",
          specialists: [
            {
              name: "Исупова Надежда Владимировна",
              post: "заместитель начальника отдела организации учебной работы",
            },
            {
              name: "Иващенко Екатерина Станиславовна",
              post: "старший инспектор отдела организации учебной работы",
            },
          ],
          competencies: [
            "выдача справок (о факте обучения в институте не для Пенсионного Фонда России)",
            "назначение академических и социальных стипендий",
            "вопросы, касающиеся корректности назначения стипендий",
          ],
        },
        {
          id: 4,
          room: "Ф-209",
          phone: "+7 (343) 375-41-54",
          specialists: [
            {
              name: "Иванов Владимир Юрьевич",
              post: "директор ФТИ, кандидат физико-математических наук",
            },
            {
              name: "Ярина Елена Борисовна",
              post: "помощник директора",
            },
          ],
          competencies: ["руководство Институтом"],
        },
        {
          id: 5,
          room: "Ф-216",
          phone: "+7 (343) 375-95-37",
          specialists: [
            {
              name: "Макарова Ирина Евгеньевна",
              post: "заместитель начальника отдела, старший диспетчер отдела организации учебной работы",
            },
            {
              name: "Карташова Елена Сергеевна",
              post: "старший инспектор отдела организации учебной работы",
            },
          ],
          competencies: [
            "составление расписания занятий по образовательным программам бакалавриата, специалитета и магистратуры ФТИ",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  margin-bottom: $mn * 10;
  @media screen and (min-width: 1024px) {
    margin-bottom: $mn * 20;
  }
  &__content {
    @media screen and (min-width: 1024px) {
      background-color: #f9f4da;
      border-radius: 20px;
      color: #0f0d0e;
      padding: 40px 20px;
    }
  }
  &__title {
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex;
      text-align: center;
      margin-bottom: 40px;
      gap: 30px;
      font-weight: bold;
      & .audience {
        width: 270px;
      }
      & .specialists,
      & .competencies {
        width: 300px;
      }
    }
    @media screen and (min-width: 1200px) {
      & .audience {
        width: 330px;
      }
      & .specialists,
      & .competencies {
        width: 370px;
      }
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      gap: 60px;
    }
    & ul {
      list-style: none;
    }
  }
}

.service {
  display: flex;
  flex-direction: column;
  background-color: #f9f4da;
  color: #0f0d0e;
  padding: 20px 15px;
  border-radius: 20px;
  gap: 32px;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 0;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: -5px;
      width: 2px;
      height: 100%;
      background-color: #fcba28;
    }
  }

  &__audience {
    display: flex;
    flex-direction: column;
    color: #0f0d0e;
    font-weight: bold;
    position: relative;
    margin: auto;
    text-align: center;
    gap: 15px;
    @media screen and (min-width: 1024px) {
      width: 270px;
      text-align: center;
    }
    @media screen and (min-width: 1200px) {
      width: 330px;
    }
  }
  &__header {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  &__phone .phone {
    color: #0f0d0e;
  }
  &__specialists,
  &__competencies {
    position: relative;
    @media screen and (min-width: 1024px) {
      width: 300px;
      text-align: left;
    }
    @media screen and (min-width: 1200px) {
      width: 370px;
    }
    &:before {
      content: "";
      position: absolute;
      left: 10%;
      top: -15px;
      width: 80%;
      height: 2px;
      background-color: #fcba28;
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
    & ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding-left: 30px;
      margin-top: 15px;
      @media screen and (min-width: 1024px) {
        gap: 15px;
        padding-left: 35px;
        margin-top: 0;
      }
    }
    &-header {
      display: flex;
      justify-content: center;
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
  }
  &__specialist:before {
    background: url(../assets/icons/suit-diamond-fill_yellow.svg);
    background-size: contain;
  }
  &__competence:before {
    background: url(../assets/icons/suit-diamond-fill_blue.svg);
    background-size: contain;
  }
  &__specialist,
  &__competence {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: -27px;
      height: 17px;
      width: 17px;
      @media screen and (min-width: 1024px) {
        left: -32px;
        height: 22px;
        width: 22px;
      }
    }
  }
}
</style>
