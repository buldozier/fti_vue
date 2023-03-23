<template>
  <div class="about-programs">
    <div class="container">
      <div class="about-programs__flex">
        <div class="about-programs__img">
          <img
            src="../assets/img/programs/about_programs.jpg"
            alt="Наставники института"
          />
        </div>
        <div class="about-programs__info">
          <div class="about-programs__info-block about-programs__students">
            <h2>> 2000</h2>
            <p>студентов обучаются в институте</p>
          </div>
          <div class="about-programs__info-block about-programs__budget">
            <h2>495</h2>
            <p>бюджетных мест в 2022 году</p>
          </div>
          <div class="about-programs__info-block about-programs__count">
            <h2>13</h2>
            <p>направлений подготовки бакалавриата и специалитета</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutProgramsComp",
};
</script>

<style lang="scss" scoped>
.about-programs {
  margin-bottom: $mn * 10;
  @media screen and (min-width: 1024px) {
    margin-bottom: $mn * 20;
  }
  &__flex {
    display: flex;
    gap: 30px;
    flex-direction: column;
    color: $background-color;
    @media screen and (min-width: 1024px) {
      flex-direction: row-reverse;
    }
  }
  &__img {
    display: flex;
    justify-content: center;
    & img {
      width: 310px;
      border-radius: 10px;
      box-shadow: 3px 3px $main-color-2;
      @media (min-width: 768px) {
        width: 500px;
      }
      @media screen and (min-width: 1024px) {
        width: 600px;
        height: 400px;
        margin: auto 0;
        box-shadow: 5px 5px #fcba28;
      }
      @media screen and (min-width: 1200px) {
        width: 724px;
        height: 482px;
      }
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: auto;
    margin-right: auto;
    & h2 {
      margin-bottom: 0;
      padding: 20px 20px 10px 20px;
      text-align: left;
    }
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: column;
      margin-left: 0;
      margin-right: auto;
    }
  }
  &__info-block {
    width: 310px;
    background-color: $main-color;
    border-radius: 10px;
    box-shadow: 3px 3px $main-color-2;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 1024px) {
      width: 340px;
      box-shadow: 5px 5px #fcba28;
    }
  }
  &__count h2 {
    padding-bottom: 0;
  }
  &__info p {
    padding-bottom: 20px;
    padding-left: 20px;
  }
}
</style>
