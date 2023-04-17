<template>
  <div class="gallery">
    <div class="container">
      <h2 class="gallery__header">Галерея</h2>
      <div class="gallery__photos">
        <img
          v-for="photo in morePhotos"
          :key="photo.id"
          :src="
            require(`../assets/img/student_union/gallery/${photo.name}.jpg`)
          "
          :alt="photo.alt"
          class="gallery__photo"
        />
      </div>
      <div class="gallery__buttons">
        <button-u-i class="show-photo gallery__button" @click="showMorePhotos"
          >Показать еще</button-u-i
        >
        <a href="https://vk.com/albums-8864093" target="_blank" class="album-vk"
          ><button-u-i class="gallery__button">Альбом в VK</button-u-i></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUI from "@/components/UI/ButtonUI";
export default {
  name: "StudentUnionGallery",
  data() {
    return {
      photos: [
        {
          id: 1,
          name: "Слет_физтеха",
          alt: "Слет Физтеха",
        },
        {
          id: 2,
          name: "Фотопрогулка",
          alt: "Фотопрогулка",
        },
        {
          id: 3,
          name: "Слет_физтеха_2",
          alt: "Слет Физтеха",
        },
        {
          id: 4,
          name: "Слет_ШСА",
          alt: "Слет ШСА",
        },
        {
          id: 5,
          name: "Пейнтбол",
          alt: "Пейнтбол",
        },
        {
          id: 6,
          name: "Выпускной",
          alt: "Выпускной",
        },
        {
          id: 7,
          name: "Юбилей_Физтеха",
          alt: "Юбилей Физтеха",
        },
        {
          id: 8,
          name: "Бенефис",
          alt: "Бенефис",
        },
        {
          id: 9,
          name: "Квест",
          alt: "Квест",
        },
        {
          id: 10,
          name: "Что_Где_Когда",
          alt: "Что? Где? Когда?",
        },
      ],
      showMore: false,
      isLaptopSize: null,
    };
  },
  components: { ButtonUI },
  methods: {
    showMorePhotos() {
      this.showMore = true;
      event.target.classList.add("hidden");
    },
    setWindowSize() {
      this.isLaptopSize = window.innerWidth >= 768;
    },
  },
  computed: {
    morePhotos() {
      if (this.isLaptopSize === true) {
        console.log(true);
        return this.photos;
      } else {
        return this.showMore ? this.photos : this.photos.slice(0, 5);
      }
    },
  },
  mounted() {
    this.setWindowSize();
    addEventListener("resize", () => {
      this.setWindowSize();
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: $mn * 10;
  @media screen and (min-width: 1024px) {
    margin-top: $mn * 20;
  }
  &__photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    @media screen and (min-width: 1024px) {
      gap: 30px;
    }
  }
  &__photo {
    width: 340px;
    border-radius: 10px;
    @media screen and (min-width: 768px) {
      width: 330px;
    }
    @media screen and (min-width: 1024px) {
      width: 470px;
    }
    @media screen and (min-width: 1200px) {
      width: 550px;
    }
  }
  &__buttons {
    margin-top: $mn * 4;
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    @media screen and (min-width: 1024px) {
      margin-top: $mn * 6;
    }
    & a {
      text-decoration: none;
    }
  }
  &__button {
    width: 150px;
    &:hover {
      background-color: $main-color-2;
      color: $text-color-2;
    }
  }
}

.hidden {
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
}

.show-photo {
  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
