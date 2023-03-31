<template>
  <div class="team">
    <div class="container">
      <h2 class="team__header">Команда</h2>
      <div class="team__structure">
        <div class="person" v-for="person in team" :key="person.id">
          <a :href="person.href">
            <img
              :src="require(`@/assets/img/student_union/team/${person.src}`)"
              :alt="person.surname + person.firstname"
            />
          </a>
          <div class="person__info">
            <div class="person__name">
              <div class="firstname">{{ person.firstname }}</div>
              <div class="surname">{{ person.surname }}</div>
            </div>
            <p>{{ person.post }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentUnionTeam",
  data() {
    return {
      team: [
        {
          id: 1,
          href: "https://vk.com/akopyan.mariam",
          src: "Мариам_Акопян.png",
          firstname: "Мариам",
          surname: "Акопян",
          post: "Председатель Союза студентов ФТИ",
        },
        {
          id: 2,
          href: "https://vk.com/buldozier",
          src: "Владислав_Рухлинский.png",
          firstname: "Владислав",
          surname: "Рухлинский",
          post: "Первый заместитель председателя",
        },
        {
          id: 3,
          href: "https://vk.com/k.kotelevskaya1",
          src: "Ксения_Котелевская.png",
          firstname: "Ксения",
          surname: "Котелевская",
          post: "Заместитель председателя по спортивно-массовой работе",
        },
        {
          id: 4,
          href: "https://vk.com/id140153930",
          src: "Мария_Доманова.png",
          firstname: "Мария",
          surname: "Доманова",
          post: "Заместитель председателя по учебно-научной работе",
        },
        {
          id: 5,
          href: "https://vk.com/milana_koryukova",
          src: "Милана_Корюкова.png",
          firstname: "Милана",
          surname: "Корюкова",
          post: "Заместитель председателя по работе с наставниками",
        },
        {
          id: 6,
          href: "https://vk.com/spiridonkinova",
          src: "Ирина_Спиридонова.png",
          firstname: "Ирина",
          surname: "Спиридонова",
          post: "Заместитель председателя по жилищно-бытовой работе",
        },
        {
          id: 7,
          href: "https://vk.com/pann_guss",
          src: "Денис_Кодочигов.png",
          firstname: "Денис",
          surname: "Кодочигов",
          post: "Руководитель проекта Role Play",
        },
        {
          id: 8,
          href: "https://vk.com/vsemoguen",
          src: "Ришат_Юмагуен.png",
          firstname: "Ришат",
          surname: "Юмагуен",
          post: "Заместитель председателя по организационно-массовой работе",
        },
        {
          id: 9,
          href: "https://vk.com/daria_7m",
          src: "Дарья_Морозова.png",
          firstname: "Дарья",
          surname: "Морозова",
          post: "Заместитель председателя по информационной работе",
        },
        {
          id: 10,
          href: "https://vk.com/risovanyiad",
          src: "Андрей_Рисованый.png",
          firstname: "Андрей",
          surname: "Рисованый",
          post: "Заместитель председателя по работе с партнерами",
        },
        {
          id: 11,
          href: "https://vk.com/yanuula",
          src: "Яна_Шалупова.png",
          firstname: "Яна",
          surname: "Шалупова",
          post: "Заместитель председателя по работе с волонтерами",
        },
        {
          id: 12,
          href: "https://vk.com/sashaadmirer",
          src: "Екатерина_Муллагалиева.png",
          firstname: "Екатерина",
          surname: "Муллагалиева",
          post: "Заместитель председателя по социально-правовой работе",
        },
        {
          id: 13,
          href: "https://vk.com/kpyrsikov",
          src: "Кирилл_Пырсиков.png",
          firstname: "Кирилл",
          surname: "Пырсиков",
          post: "Заместитель председателя по культурно-массовой работе",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.team {
  margin-top: 50px;
  &__structure {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
  }
}

.person {
  width: 140px;
  margin-bottom: 20px;

  & a {
    border-radius: 50%;
  }

  & img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }

  &__info {
    margin-top: 20px;
    text-align: center;
    & p {
      font-size: 12px;
    }
  }

  &__name {
    margin-bottom: 10px;

    & .firstname,
    & .surname {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
