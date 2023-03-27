<template>
  <div class="events">
    <div class="container">
      <h2 class="events__header">Мероприятия</h2>
      <div class="events__content">
        <div class="event" v-for="event in events" :key="event.id">
          <img
            :src="require(`../assets/img/student_union/${event.name}`)"
            :alt="event.header"
          />
          <p>{{ event.header }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentUnionEventsComp",
  data() {
    return {
      events: [
        {
          id: 1,
          name: "Физтех_Weekend.png",
          header: "Физтех Weekend",
        },
        {
          id: 2,
          name: "Дебют_первокурсников.png",
          header: "Дебют первокурсников",
        },
        {
          id: 3,
          name: "Слет_ФТИ.png",
          header: "Слет ФТИ",
        },
        {
          id: 4,
          name: "ЧтоГдеКогда.png",
          header: "Что? Где? Когда?",
        },
        {
          id: 5,
          name: "Школа_студенческого_актива.png",
          header: "Школа студенческого актива",
        },
        {
          id: 6,
          name: "Квест.jpg",
          header: "Квест",
        },
        {
          id: 7,
          name: "Международная_конференция_ФТИ.png",
          header: "Международная конференция ФТИ",
        },
        {
          id: 8,
          name: "Выпускной.png",
          header: "Выпускной",
        },
        {
          id: 9,
          name: "Фотопрогулка.jpg",
          header: "Фотопрогулка",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.events {
  display: flex;
  flex-direction: column;
  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}

.event {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  position: relative;
  width: 310px;
  height: 207px;
  background-color: #0f0d0e;
  border-radius: 20px;
  user-select: none;
  & img {
    border-radius: 20px;
    filter: opacity(30%);
    width: 310px;
    height: 207px;
    position: absolute;
    top: 0;
    left: 0;
  }
  & p {
    margin: auto;
    font-size: 18px;
    text-align: center;
    z-index: 5;
    text-shadow: 1px 1px 2px #0f0d0e;
  }
}
</style>
