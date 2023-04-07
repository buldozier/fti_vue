<template>
  <div class="information">
    <div class="container">
      <h2>Документы</h2>
      <div class="information__docs">
        <div class="information__doc" v-for="(doc, index) in docs" :key="index">
          <a :href="doc.url" :class="doc.class" target="_blank">{{
            doc.text
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentUnionInfo",
  data() {
    return {
      docs: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/student_union_info%2FPamyatka_Matpomosch.pdf?alt=media&token=caa79772-1687-4170-8a88-a26bdd116c3f",
          text: "Памятка по подаче заявления на матпомощь",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/student_union_info%2FBlank_zayavleniy_na_mat_pomosch_v_FTI.docx?alt=media&token=577a6d1c-636d-4596-ab52-7abd1a3f0352",
          text: "Бланк заявления на материальную поддержку (институт)",
          class: "docx",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/student_union_info%2FPolozhenie_o_25_fonde_2022.pdf?alt=media&token=2d186cd8-0798-4613-9828-7e189dd47f6f",
          text: "Положение о формировании фонда материальной поддержки",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/student_union_info%2FByudzhet_GUK-309__Blank_zayavlenia_na_mat_pomosch.docx?alt=media&token=8d821d56-bba8-404b-9976-40306d9acf3f",
          text: "Бланк заявления на материальную поддержку (университет)",
          class: "docx",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/student_union_info%2FPolozhenie_o_SO.PDF?alt=media&token=c20bfb5f-9ccf-4d39-ad13-a384567ec922",
          text: "Положение о студенческом общежитии",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/student_union_info%2FPamyatka_na_poselenie_22-23.pdf?alt=media&token=24421137-5f99-4f2e-af49-495c6d3c5282",
          text: "Памятка для поселения в общежитие",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.information {
  margin-top: $mn * 10;
  @media screen and (min-width: 1024px) {
    margin-top: $mn * 20;
  }
  &__docs {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    @media screen and (min-width: 1024px) {
      margin-top: $mn * 10;
      gap: 50px;
    }
  }
  &__doc {
    display: flex;
    width: 325px;
    position: relative;
    @media screen and (min-width: 1024px) {
      width: 460px;
    }
    @media screen and (min-width: 1200px) {
      width: 560px;
    }
    & a {
      margin-left: 40px;
      color: #f9f4da;
      text-decoration: none;
      font-size: $fz;
      @media screen and (min-width: 768px) {
        font-size: $fz-m;
      }
      &:hover {
        text-decoration: underline;
      }
      @media screen and (min-width: 1024px) {
        margin-left: $mn * 12;
        font-size: $fz-l;
        display: inline-block;
        margin-top: auto;
        margin-bottom: auto;
      }
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: url(../assets/icons/filetype_pdf_yellow.svg);
        background-size: cover;
        width: 30px;
        height: 30px;
        @media screen and (min-width: 1024px) {
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
        }
      }
      &.docx:before {
        background: url(../assets/icons/filetype-docx.svg);
        background-size: cover;
      }
    }
  }
}
</style>
