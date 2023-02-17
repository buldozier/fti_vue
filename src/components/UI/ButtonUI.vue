<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonUI",
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  width: 178px;
  height: 50px;
  border: 1px solid $main-color-2;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: $text-color-2;
  transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
  user-select: none;
  background-color: $main-color-2;
}
</style>
