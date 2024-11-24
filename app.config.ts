export default defineAppConfig({
  ui: {
    primary: "violet",
    gray: "cool",
    slideover: {
      width: "w-screen max-w-2xl",
    },
    input: {
      color: {
        white: {
          outline:
            "shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1 focus:ring-primary-400 dark:focus:ring-gray-400",
        },
      },
    },
    divider: { label: "text-4xl" },
    button: { font: "font-bold" },
    toggle: { base: "relative inline-flex flex-shrink-0  disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none shodow-custom" },
  },
});
