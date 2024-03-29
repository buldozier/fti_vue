<template>
  <div class="inner-overlay" ref="modal" @mousedown="modalHidden">
    <div class="overlay-event" @mousedown.stop>
      <div class="overlay-event__top">
        <div class="overlay-event__header">{{ event.header }}</div>
        <div class="overlay-event__close-btn" @click="modalHidden"></div>
      </div>
      <div class="overlay-event__bottom">
        <div class="overlay-event__text">
          {{ event.text }}
        </div>
        <div class="overlay-event__photos">
          <img
            v-for="(photo, index) in event.photos"
            :key="index"
            :src="require(`@/assets/img/student_union/events/${photo}`)"
            :alt="event.header"
            class="overlay-event__photo"
          />
        </div>
        <iframe
          v-if="event.videoURL"
          class="overlay-event__video"
          :src="event.videoURL"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { showBodyOverflow, hideBodyOverflow } from "@/helpers/bodyOverflow";

export default {
  name: "ModalVue",
  components: {},
  data() {
    return {
      event: {},
    };
  },
  methods: {
    ...mapMutations(["changeModalShow"]),
    modalHidden() {
      this.changeModalShow();
      showBodyOverflow();
    },
  },
  computed: {
    ...mapGetters(["getModalEventId"]),
  },
  mounted() {
    setTimeout(() => {
      this.$refs.modal.classList.add("opacity");
    }, 0);
    this.event = this.getModalEventId;
    hideBodyOverflow();
  },
};
</script>

<style lang="scss" scoped>
.inner-overlay {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 13, 14, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 100;
}

.opacity {
  opacity: 1;
}

.overlay-event {
  max-height: 80vh;
  margin: auto $mn * 3;
  padding: $pg * 3;
  border-radius: 15px;
  background-color: #f9f4da;
  color: #0f0d0e;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 708px;
    margin: auto;
  }
  @media screen and (min-width: 1024px) {
    width: 900px;
  }
  &__top {
    display: flex;
    height: 44px;
    margin-bottom: $mn * 4;
  }
  &__header {
    width: calc(100% - 45px);
    font-size: $fz-l;
    font-weight: bold;
    margin: auto 0;
    @media screen and (min-width: 768px) {
      font-size: $fz-xl;
      font-weight: bold;
    }
  }
  &__close-btn {
    z-index: 10;
    position: absolute;
    top: 22px;
    right: 15px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:before {
      position: absolute;
      left: 0;
      top: 12px;
      content: "";
      width: 30px;
      height: 5px;
      background-color: #0f0d0e;
      transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
      transform: rotate(45deg);
    }
    &:after {
      position: absolute;
      left: 0;
      top: 12px;
      content: "";
      width: 30px;
      height: 5px;
      background-color: #0f0d0e;
      transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
      transform: rotate(-45deg);
    }
  }
  &__bottom {
    max-height: 70vh;
    overflow-y: auto;
    width: 100%;
    padding-right: 7px;
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $main-color-2;
      border-radius: 10px;
    }
  }
  &__text {
    margin-bottom: $mn * 4;
    @media screen and (min-width: 768px) {
      font-size: $fz-m;
    }
  }
  &__video {
    width: 100%;
    aspect-ratio: 16/9;
    border: none;
    border-radius: 10px;
    margin-top: $mn * 4;
  }
  &__photos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__photo {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
