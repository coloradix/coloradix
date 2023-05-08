import { createEffect, createRoot, createSignal } from "solid-js";
import { render } from "solid-js/web";

import "./index.css";

type ThemeMode = "light" | "dark";
type ThemePrimary = "red" | "green" | "blue";

const [mode, setMode] = createRoot(() => createSignal<ThemeMode>("light"));
const [primary, setPrimary] = createRoot(() => createSignal<ThemePrimary>("red"));

const toggleMode = () => {
  setMode((state) => (state === "dark" ? "light" : "dark"));
};

const togglePrimary = () => {
  setPrimary((state) => (state === "red" ? "green" : state === "green" ? "blue" : "red"));
};

const setDocumentThemeMode = (mode: ThemeMode) => {
  document.documentElement.setAttribute("data-theme", mode);
};

const setDocumentThemePrimary = (primary: ThemePrimary) => {
  document.documentElement.setAttribute("data-theme-primary", primary);
};

setDocumentThemeMode(mode());
setDocumentThemePrimary(primary());

const App = () => {
  createEffect(() => {
    setDocumentThemeMode(mode());
  });

  createEffect(() => {
    setDocumentThemePrimary(primary());
  });

  return (
    <div class="fixed inset-0 flex justify-center items-center bg-neutral-1 text-neutral-12 transition-colors">
      <div class="flex gap-2">
        <button
          type="button"
          class="inline-flex justify-center items-center rounded-xl bg-primary-9 text-white-12 px-6 py-1 font-medium text-lg transition-colors"
          onClick={toggleMode}
        >
          toggle mode
        </button>

        <button
          type="button"
          class="inline-flex justify-center items-center rounded-xl bg-primary-9 text-white-12 px-6 py-1 font-medium text-lg transition-colors"
          onClick={togglePrimary}
        >
          toggle primary
        </button>
      </div>
    </div>
  );
};

render(() => <App />, document.getElementById("root")!);
