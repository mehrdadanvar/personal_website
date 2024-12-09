export default defineAppConfig({
  ui: {
    primary: "violet",
    zinc: "cool",
    slideover: {
      width: "w-screen max-w-2xl",
    },
    input: {
      color: {
        white: {
          outline:
            "shadow-sm bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-400",
        },
      },
    },
    divider: { label: "text-4xl" },
    button: { font: "font-bold" },
    toggle: { base: "relative inline-flex flex-shrink-0  disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none shodow-custom" },
  },
});
