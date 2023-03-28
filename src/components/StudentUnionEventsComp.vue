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
