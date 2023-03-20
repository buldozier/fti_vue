module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
  devServer: {
    proxy: "https://localhost:8080/",
  },
};
