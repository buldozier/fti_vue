<template>
  <div class="calculator">
    <div class="container">
      <h2>Калькулятор ЕГЭ</h2>
      <form class="calculator__form" @submit.prevent="showSuitableSubjects">
        <div class="calculator__subjects">
          <div
            class="calculator__subject"
            v-for="label in labels"
            :key="label.id"
          >
            <label>
              <h3>{{ label.header }}</h3>
              <input
                type="number"
                :placeholder="label.placeholder"
                :ref="label.ref"
                :required="label.required"
                :min="label.min"
                :class="label.class"
                max="100"
                v-model="label.value"
                @change="setValidValue(label, label.min)"
              />
            </label>
          </div>
        </div>
        <div class="calculator__submit">
          <button type="submit">Показать подходящие направления</button>
        </div>
      </form>
      <div class="calculator-response">
        <div class="response" v-if="responseSubjects.length !== 0">
          <div
            class="response__object"
            v-for="program in responseSubjects"
            :key="program.id"
          >
            <div class="response__code">
              <p>Код направления:</p>
              <p>{{ program.code }}</p>
            </div>
            <a :href="program.link" target="_blank" class="response__name">{{
              program.title
            }}</a>
            <div class="response__score">
              <p>Проходной балл:</p>
              <div class="score">
                <img src="../assets/icons/check-all.svg" alt="Проходной балл" />
                <p>{{ program.score }}</p>
              </div>
            </div>
            <div class="response__places">
              <p>Бюджетных мест:</p>
              <div class="places">
                <img src="../assets/icons/people.svg" alt="Количество мест" />
                <p>{{ program.places }}</p>
              </div>
            </div>
            <div class="response__tests">
              <div
                class="response__test"
                v-for="(subject, index) in program.subjects"
                :key="index"
                :class="subject.class"
              >
                {{ getSubjectLetters(subject.name) }}
              </div>
            </div>
          </div>
        </div>
        <div class="reject" ref="reject" v-else>
          {{ rejectText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CalculatorComp",
  data() {
    return {
      rejectText: "",
      labels: [
        {
          id: 1,
          header: "Русский язык",
          placeholder: "40 - 100",
          ref: "russ",
          required: true,
          min: 40,
          value: "",
        },
        {
          id: 2,
          header: "Математика",
          placeholder: "39 - 100",
          ref: "math",
          required: true,
          min: 39,
          value: "",
        },
        {
          id: 3,
          header: "Физика",
          placeholder: "39 - 100",
          ref: "phys",
          required: false,
          min: 39,
          value: "",
        },
        {
          id: 4,
          header: "Информатика",
          placeholder: "44 - 100",
          ref: "inf",
          required: false,
          min: 44,
          value: "",
        },
        {
          id: 5,
          header: "Химия",
          placeholder: "39 - 100",
          ref: "chem",
          required: false,
          min: 39,
          value: "",
        },
      ],
      responseSubjects: [],
    };
  },
  methods: {
    setValidValue(label, minValue) {
      if (label.value < minValue && label.value !== "") {
        label.class = "calculator__subjects_invalid";
      } else {
        label.class = "";
      }

      if (label.value > 100) {
        label.value = 100;
        label.class = "";
      }
    },
    getSubjectLetters(subject) {
      switch (subject) {
        case "Математика":
          return "М";
        case "Русский язык":
          return "РЯ";
        case "Физика":
          return "Ф";
        case "Химия":
          return "Х";
        case "Информатика":
          return "ИНФ";
      }
    },
    showSuitableSubjects() {
      const subjectValues = this.labels.reduce((sum, current) => {
        return {
          ...sum,
          [current.ref]: current.value,
        };
      }, 0);

      if (
        this.labels[2].value !== "" ||
        this.labels[3].value !== "" ||
        this.labels[4].value !== ""
      ) {
        this.rejectText = "";
        this.responseSubjects = this.calculateSubjects(subjectValues);
        console.log(this.responseSubjects);
        if (this.responseSubjects.length === 0) {
          this.rejectText =
            "Образовательные программы не найдены. В 2021 году проходной балл на все специальности был выше введенного";
        }
      } else {
        this.responseSubjects = [];
        this.rejectText =
          "Необходимо ввести балл хотя бы для одного из экзаменов по выбору";
      }
    },
    calculateSubjects(subjectValues) {
      return Object.assign(
        this.filterSubjects(subjectValues, "phys", "Физика"),
        this.filterSubjects(subjectValues, "inf", "Информатика"),
        this.filterSubjects(subjectValues, "chem", "Химия")
      );
    },
    filterSubjects(subjectValues, ref, name) {
      const russAndMathScore = subjectValues["russ"] + subjectValues["math"];
      let filteredSubjects = [];

      if (subjectValues[ref] !== "") {
        filteredSubjects = this.getProgramsBak.filter((subject) => {
          let isRefExist = false;

          subject.subjects.forEach((el) => {
            if (el.name === name) {
              isRefExist = true;
            }
          });

          if (isRefExist) {
            return russAndMathScore + subjectValues[ref] >= subject.score;
          }
        });
      }

      return filteredSubjects;
    },
  },
  computed: {
    ...mapGetters(["getProgramsBak"]),
  },
};
</script>

<style lang="scss" scoped>
.calculator {
  margin-bottom: 50px;
  &__subjects {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
  }
  &__subjects h3 {
    align-self: center;
  }
  &__subjects input {
    width: 50px;
    padding: 15px;
    color: #f9f4da;
    border: 1px solid #f9f4da;
    background: transparent;
    border-radius: 10px;
    outline: none;
    align-self: center;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  &__subjects_invalid {
    border-color: #9d1717 !important;
  }
  &__subject label {
    display: flex;
    justify-content: space-between;
  }
  &__submit {
    display: flex;
    justify-content: center;
    & button {
      font-family: "Roboto", sans-serif;
      padding: 15px;
      border-radius: 10px;
      color: #0f0d0e;
      border: 1px solid #fcba28;
      background-color: #fcba28;
      cursor: pointer;
    }
  }
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.calculator-response {
  margin-top: $mn * 6;
  text-align: center;
}

.response {
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__object {
    display: flex;
    background-color: #f9f4da;
    border-radius: 10px;
    padding: 15px;
    color: #0f0d0e;
    font-size: $fz-m;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    position: relative;
  }
  &__code {
    display: flex;
    justify-content: space-between;
    font-size: $fz;
  }
  &__name {
    display: flex;
    margin: auto;
    color: $text-color-2;
    font-weight: bold;
    text-align: center;
    height: 50px;
    align-items: center;
  }
  &__score {
    display: flex;
    justify-content: space-between;
    & img {
      width: 24px;
    }
  }
  &__places {
    display: flex;
    justify-content: space-between;
    & img {
      width: 20px;
    }
  }
  &__tests {
    display: flex;
    font-size: 14px;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
  &__test {
    background-color: #007aff;
    padding: 5px 10px;
    border-radius: 10px;
    color: #f9f4da;
  }
}

.score {
  display: flex;
  gap: 10px;
  & p {
    display: flex;
    align-self: center;
  }
}

.places {
  display: flex;
  gap: 20px;
  & p {
    display: flex;
    align-self: center;
  }
}

.math {
  background-color: #9d1717;
}

.russian {
  background-color: #18756f;
}

.physics {
  background-color: #18741b;
}

.informatics {
  background-color: #741870;
}

.chemistry {
  background-color: #ff5c00;
}
</style>
