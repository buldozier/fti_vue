<template>
  <div class="events">
    <div class="container">
      <h2 class="events__header">Мероприятия</h2>
      <div class="events__content">
        <div
          class="event"
          v-for="event in getAllEvents"
          :key="event.id"
          @click="showModal(event.id)"
        >
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
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "StudentUnionEventsComp",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeModalShow", "setModalEventId"]),
    showModal(id) {
      console.log(id);
      this.setModalEventId(id);
      this.changeModalShow();
    },
  },
  computed: {
    ...mapGetters(["getAllEvents", "getEventById"]),
  },
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
    @media screen and (min-width: 768px) {
      gap: 40px;
    }
    @media screen and (min-width: 1024px) {
      gap: 20px;
    }
    @media screen and (min-width: 1200px) {
      gap: 35px;
    }
  }
}

.event {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  position: relative;
  width: 280px;
  height: 187px;
  background-color: #0f0d0e;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 213px;
  }
  @media screen and (min-width: 1024px) {
    width: 310px;
    height: 207px;
  }
  @media screen and (min-width: 1200px) {
    width: 360px;
    height: 240px;
  }

  &:hover img {
    @media screen and (min-width: 1024px) {
      transform: scale(1.03);
      filter: opacity(65%);
    }
  }
  & img {
    border-radius: 20px;
    filter: opacity(30%);
    width: 280px;
    height: 187px;
    position: absolute;
    top: 0;
    left: 0;
    @media screen and (min-width: 768px) {
      width: 320px;
      height: 213px;
    }
    @media screen and (min-width: 1024px) {
      width: 310px;
      height: 207px;
      transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
    }
    @media screen and (min-width: 1200px) {
      width: 360px;
      height: 240px;
    }
  }
  & p {
    margin: auto;
    font-size: $fz-l;
    text-align: center;
    z-index: 5;
    text-shadow: 1px 1px 2px #0f0d0e;
  }
}
</style>
