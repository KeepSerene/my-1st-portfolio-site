/*=============== DARK-LIGHT THEME TOGGLE ===============*/

const themeIconsWrapperEl = document.querySelector(
  "[data-theme-icons-wrapper]"
);

export default function handleThemeToggle() {
  const userTheme = localStorage.getItem("myPfolioTheme");

  const isSysThemeDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const initialTheme = userTheme ?? (isSysThemeDark ? "dark" : "light");

  // Set HTML color-scheme on mount
  document.documentElement.style.colorScheme =
    initialTheme === "dark" ? "dark" : "light";

  // Load initial theme on mount
  document.body.classList[initialTheme === "dark" ? "add" : "remove"]("dark");

  const getNewTheme = () => {
    const isDarkTheme = document.body.classList.contains("dark");

    // Set HTML color-scheme based on new theme
    document.documentElement.style.colorScheme = isDarkTheme ? "dark" : "light";

    return isDarkTheme ? "dark" : "light";
  };

  themeIconsWrapperEl.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem("myPfolioTheme", getNewTheme());
  });
}
