<template>
  <div class="people-fti" ref="people-fti">
    <div class="container">
      <h2 id="people-fti__header">Физтех в людях</h2>
      <div class="people-fti__photos">
        <div class="people-fti__photo">
          <img src="../assets/img/photo/Козлов.jpg" alt="Козлов" />
          <h3>Василий Козлов</h3>
          <p>Заместитель губернатора Свердловской области</p>
        </div>
        <div class="people-fti__photo">
          <img src="../assets/img/photo/Гроховский.jpg" alt="Козлов" />
          <h3>Виктор Гроховский</h3>
          <p>Исследователь метеоритов</p>
        </div>
        <div class="people-fti__photo">
          <img src="../assets/img/photo/Иванов.jpg" alt="Козлов" />
          <h3>Александр Иванов</h3>
          <p>Автор канала "Химия - просто"</p>
        </div>
        <div class="people-fti__photo">
          <img src="../assets/img/photo/Обабков.jpg" alt="Козлов" />
          <h3>Илья Обабков</h3>
          <p>Директор ИРИТ-РТФ</p>
        </div>
        <div class="people-fti__photo">
          <img src="../assets/img/photo/Елагин.jpg" alt="Козлов" />
          <h3>Андрей Елагин</h3>
          <p>Основатель НПО “БиоМикроГели”</p>
        </div>
        <div class="people-fti__photo">
          <img src="../assets/img/photo/Пантыкин.jpg" alt="Козлов" />
          <h3>Александр Пантыкин</h3>
          <p>“Дедушка уральского рока”</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleFtiComp",
};
</script>

<style lang="scss" scoped>
.people-fti {
  margin-bottom: 50px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 100px;
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
      margin-bottom: 25px;
      border-radius: 20px;
      box-shadow: 3px 3px $main-color-2;
      width: 100%;
      @media screen and (min-width: 1024px) {
        margin-bottom: 30px;
        border-radius: 20px;
        box-shadow: 5px 5px $main-color-2;
        width: 100%;
      }
    }
    & h3 {
      margin-bottom: 10px;
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
