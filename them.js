window.onload = function () {
  let savedTheme = localStorage.getItem("theme") || "style.css";
  document.getElementById("theme").setAttribute("href", savedTheme);
};
function toggleMode(mode) {
  let theme = document.getElementById("theme");
  let newTheme = mode === "dark" ? "darkmode.css" : "style.css";
  theme.setAttribute("href", newTheme);
  localStorage.setItem("theme", newTheme);
}
