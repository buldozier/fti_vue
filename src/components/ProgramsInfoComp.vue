<template>
  <div class="information">
    <div class="container">
      <h2>Информация для поступающих</h2>
      <div class="information__links">
        <div
          class="information__link"
          v-for="(link, index) in links"
          :key="index"
        >
          <a :href="link.url" target="_blank">{{ link.text }}</a>
        </div>
      </div>
      <div class="information__docs">
        <div class="information__doc" v-for="(doc, index) in docs" :key="index">
          <a :href="doc.url" target="_blank">{{ doc.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramsInfoComp",
  data() {
    return {
      links: [
        {
          url: "https://priem.urfu.ru/#/",
          text: "Личный кабинет абитуриента",
        },
        {
          url: "https://urfu.ru/ru/applicant/",
          text: "Абитуриентам УрФУ",
        },

        {
          url: "https://urfu.ru/priemurfu/",
          text: "Бакалавриат УрФУ",
        },

        {
          url: "https://masters.urfu.ru",
          text: "Магистратура УрФУ",
        },
      ],
      docs: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/enrollee_inf%2FPravila_priema_bakalavriat_i_specialitet_2022.pdf?alt=media&token=9ae0043d-d557-4ff7-b85a-343080d50512",
          text: "Правила приема граждан на обучение по программам бакалавриата и специалитета",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/enrollee_inf%2FPravila_priema_magistratura_2022.pdf?alt=media&token=364b679d-abc3-4d3c-8e7b-c40417ca0ea5",
          text: "Правила приема граждан на обучение по программам магистратуры",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/enrollee_inf%2FPravila_priema_2022.pdf?alt=media&token=bf052b78-bc85-4924-9d57-f08e0e156466",
          text: "Алгоритм поступления в 2022 году (бакалавриат и специалитет)",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/enrollee_inf%2FInformacija_o_porjadke_ucheta_individualnykh_dostizhenii.pdf?alt=media&token=6963f1cb-ff75-4889-9758-e56bb3493ee5",
          text: "Информация о порядке учета индивидуальных достижений поступающих",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/enrollee_inf%2FPerechen_dokumentov_dlja_postupajushchikh_s_osobymi_pravami.pdf?alt=media&token=27d4dfc0-11ab-4baf-af60-376b0e2db206",
          text: "Перечень документов для поступающих с особыми правами",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ftibase.appspot.com/o/enrollee_inf%2FLgoty_pobediteljam_i_prizeram_olimpiad.pdf?alt=media&token=809bbe31-c39b-4171-999f-86cafb759c35",
          text: "Льготы победителям и призерам олимпиад",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.information {
  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    @media screen and (min-width: 1024px) {
      gap: 50px;
    }
  }
  &__link {
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
      margin-top: 6px;
      margin-bottom: 6px;
      color: #f9f4da;
      font-size: 14px;
      @media screen and (min-width: 1024px) {
        margin-left: 60px;
        margin-top: 9px;
        margin-bottom: 9px;
        font-size: $fz-l;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: url(../assets/icons/info_circle.svg);
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
    }
  }
  &__docs {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    @media screen and (min-width: 1024px) {
      margin-top: 50px;
      gap: 50px;
    }
  }
  &__doc {
    display: flex;
    width: 325px;
    position: relative;
    text-decoration: underline;
    @media screen and (min-width: 1024px) {
      width: 460px;
    }
    @media screen and (min-width: 1200px) {
      width: 560px;
    }
    & a {
      margin-left: 40px;
      color: #f9f4da;
      font-size: 14px;
      text-decoration: none;
      @media screen and (min-width: 1024px) {
        margin-left: 60px;
        font-size: 18px;
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
    }
  }
}
</style>
