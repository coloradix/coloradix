import { createEffect, createRoot, createSignal } from "solid-js";
import { render } from "solid-js/web";

import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./index.css";

type Theme = "light" | "dark";
type AliasPrimary = "pr" | "pg" | "pb";

const SELECTOR = "attribute" as "attribute" | "class";

const [theme, setTheme] = createRoot(() => createSignal<Theme>("light"));
const [primary, setPrimary] = createRoot(() => createSignal<AliasPrimary>("pr"));

const toggleTheme = () => {
  setTheme((state) => (state === "dark" ? "light" : "dark"));
};

const toggleAliasPrimary = () => {
  setPrimary((state) => (state === "pr" ? "pg" : state === "pg" ? "pb" : "pr"));
};

const setDocumentTheme =
  SELECTOR === "attribute"
    ? (theme: Theme) => {
        document.documentElement.setAttribute("data-theme", theme);
      }
    : SELECTOR === "class"
    ? (theme: Theme) => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
      }
    : () => {};

const setDocumentAliasPrimary =
  SELECTOR === "attribute"
    ? (primary: AliasPrimary) => {
        document.documentElement.setAttribute("data-alias-primary", primary);
      }
    : SELECTOR === "class"
    ? (primary: AliasPrimary) => {
        document.documentElement.classList.remove(...["pr", "pg", "pb"].map((primary) => `alias-primary-${primary}`));
        document.documentElement.classList.add(`alias-primary-${primary}`);
      }
    : () => {};

setDocumentTheme(theme());
setDocumentAliasPrimary(primary());

const App = () => {
  createEffect(() => {
    setDocumentTheme(theme());
  });

  createEffect(() => {
    setDocumentAliasPrimary(primary());
  });

  return (
    <div class="fixed inset-0 flex justify-center items-center bg-neutral-1 text-neutral-12 transition-colors">
      <div class="flex gap-2">
        <button
          type="button"
          class="inline-flex justify-center items-center rounded-xl bg-primary-9 text-white-12 px-6 py-1 font-medium text-lg transition-colors"
          onClick={toggleTheme}
        >
          toggle theme
        </button>

        <button
          type="button"
          class="inline-flex justify-center items-center rounded-xl bg-primary-9 text-white-12 px-6 py-1 font-medium text-lg transition-colors"
          onClick={toggleAliasPrimary}
        >
          toggle alias primary
        </button>
      </div>
    </div>
  );
};

render(() => <App />, document.getElementById("root")!);
