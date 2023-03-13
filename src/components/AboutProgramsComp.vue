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
  margin-bottom: 50px;
  &__flex {
    display: flex;
    gap: 30px;
    flex-direction: column;
    color: $background-color;
  }
  &__img {
    display: flex;
    justify-content: center;
    & img {
      width: 310px;
      border-radius: 10px;
      box-shadow: 3px 3px $main-color-2;
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
  }
  &__info-block {
    width: 310px;
    background-color: $main-color;
    border-radius: 10px;
    box-shadow: 3px 3px $main-color-2;
    margin-left: auto;
    margin-right: auto;
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
