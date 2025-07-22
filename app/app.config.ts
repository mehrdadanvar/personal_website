export default defineAppConfig({
  ui: {
    colors: {
      neutral: "zinc",
    },
    button: {
      slots: {
        base: ["hover:cursor-pointer"],
      },
    },
    card: {
      slots: { root: "dark:bg-transparent dark:backdrop-brightness-125" },
    },
  },
});
