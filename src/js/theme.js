/*=============== DARK-LIGHT THEME TOGGLE ===============*/

const themeIconsWrapperEl = document.querySelector(
  "[data-theme-icons-wrapper]"
);

export default function handleThemeToggle() {
  const previousTheme = localStorage.getItem("myPfolioTheme");

  const isSysThemeDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const initialTheme = previousTheme ?? (isSysThemeDark ? "dark" : "light");

  document.documentElement.style.colorScheme =
    initialTheme === "dark" ? "dark" : "light";

  // Load initial theme on mount
  document.body.classList[initialTheme === "dark" ? "add" : "remove"]("dark");

  const getNewTheme = () =>
    document.body.classList.contains("dark") ? "dark" : "light";

  themeIconsWrapperEl.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem("myPfolioTheme", getNewTheme());
  });
}
