<template>
  <div class="subdivisions">
    <div class="container">
      <h2 class="subdivisions__header">
        Контактная информация подразделений УрФУ
      </h2>
      <ul class="subdivisions__list">
        <li
          class="subdivision"
          v-for="subdivision in subdivisions"
          :key="subdivision.id"
        >
          <p class="subdivision__text">
            {{ subdivision.text }}
            <a :href="`tel:${subdivision.phone}`" class="subdivision__phone">{{
              subdivision.phone
            }}</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsSubdivision",
  data() {
    return {
      subdivisions: [
        {
          id: 1,
          text: "Второй отдел — И-224, телефон:",
          phone: "+7 (343) 375-48-28",
        },
        {
          id: 2,
          text: "Отдел по работе со студентами (в т.ч. выдача справок о факте обучения в институте для Пенсионного Фонда России) — И-216, телефон:",
          phone: "+7 (343) 375-45-12",
        },
        {
          id: 3,
          text: "Медико-санитарная часть университета (МСЧ) — Комсомольская, 59б, телефон регистратуры:",
          phone: "+7 (343) 374-34-50",
        },
        {
          id: 4,
          text: "Бухгалтерия, группа по расчету стипендий — М-230, телефон:",
          phone: "+7 (343) 375-41-09",
        },
        {
          id: 5,
          text: "Центр адаптации иностранных студентов — ГУК-209, телефон:",
          phone: "+7 (343) 375-41-93",
        },
        {
          id: 6,
          text: "Отдел сопровождения государственной аттестации — И-217, телефон:",
          phone: "+7 (343) 374-30-52",
        },
        {
          id: 7,
          text: "Отдел по работе со студентами (в т.ч. выдача справок о факте обучения в институте для Пенсионного Фонда России) — И-216, телефон:",
          phone: "+7 (343) 375-45-07",
        },
        {
          id: 8,
          text: "Техподдержка (учетная запись, личный кабинет, БРС): телефон:",
          phone: "+7 (343) 227-20-70",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.subdivisions {
  &__header {
    margin-bottom: 50px;
  }
  &__list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 30px;
  }
}

.subdivision {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -27px;
    height: 17px;
    width: 17px;
    background: url(../assets/icons/suit-diamond-fill_yellow.svg);
    background-size: contain;
    @media screen and (min-width: 1024px) {
      left: -32px;
      height: 22px;
      width: 22px;
    }
  }
  &__phone {
    color: #f9f4da;
  }
}
</style>
