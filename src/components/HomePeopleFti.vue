<template>
  <div class="people-fti" ref="people-fti">
    <div class="container">
      <h2 id="people-fti__header">Физтех в людях</h2>
      <div class="people-fti__photos">
        <div class="people-fti__photo" v-for="photo in people" :key="photo.id">
          <img
            :src="require(`../assets/img/photo/${photo.src}`)"
            :alt="photo.name"
          />
          <h3>{{ photo.name }}</h3>
          <p>{{ photo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleFtiComp",
  data() {
    return {
      people: [
        {
          id: 1,
          src: "Козлов.jpg",
          name: "Василий Козлов",
          description: "Заместитель губернатора Свердловской области",
        },
        {
          id: 2,
          src: "Гроховский.jpg",
          name: "Виктор Гроховский",
          description: "Исследователь метеоритов",
        },
        {
          id: 3,
          src: "Иванов.jpg",
          name: "Александр Иванов",
          description: 'Автор канала "Химия - просто"',
        },
        {
          id: 4,
          src: "Обабков.jpg",
          name: "Илья Обабков",
          description: "Директор ИРИТ-РТФ",
        },
        {
          id: 5,
          src: "Елагин.jpg",
          name: "Андрей Елагин",
          description: 'Основатель НПО "БиоМикроГели"',
        },
        {
          id: 6,
          src: "Пантыкин.jpg",
          name: "Александр Пантыкин",
          description: '"Дедушка уральского рока"',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.people-fti {
  margin-bottom: $mn * 10;
  @media screen and (min-width: 1024px) {
    margin-bottom: $mn * 20;
  }
  &__photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 50px 30px;
    @media screen and (min-width: 1024px) {
      gap: 50px 70px;
    }
    @media screen and (min-width: 1200px) {
      justify-content: space-evenly;
    }
  }
  &__photo {
    width: 140px;
    text-align: center;
    & img {
      margin-bottom: $mn * 5;
      border-radius: 20px;
      box-shadow: 3px 3px $main-color-2;
      width: 100%;
      @media screen and (min-width: 1024px) {
        margin-bottom: $mn * 6;
        border-radius: 20px;
        box-shadow: 5px 5px $main-color-2;
        width: 100%;
      }
    }
    & h3 {
      margin-bottom: $mn * 2;
    }
    @media screen and (min-width: 768px) {
      width: 180px;
    }
    @media screen and (min-width: 1024px) {
      width: 250px;
      text-align: center;
    }
  }
}
</style>
