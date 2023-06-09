import { createEffect, createRoot, createSignal } from "solid-js";
import { render } from "solid-js/web";

import "./index.css";

type Theme = "light" | "dark";
type AliasPrimary = "red" | "green" | "blue";

const [theme, setTheme] = createRoot(() => createSignal<Theme>("light"));
const [primary, setPrimary] = createRoot(() => createSignal<AliasPrimary>("red"));

const toggleTheme = () => {
  setTheme((state) => (state === "dark" ? "light" : "dark"));
};

const toggleAliasPrimary = () => {
  setPrimary((state) => (state === "red" ? "green" : state === "green" ? "blue" : "red"));
};

const setDocumentTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const setDocumentAliasPrimary = (primary: AliasPrimary) => {
  document.documentElement.setAttribute("data-alias-primary", primary);
};

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
