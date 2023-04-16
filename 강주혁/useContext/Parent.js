import { ThemeContext } from "./App.js";
import Child from "./Child.js";
import { useContext } from "./React.js";

export default function Parent() {
  const { theme, setTheme } = useContext(ThemeContext);

  window.setTheme = () => setTheme((prev) => prev === "dark" ? "light" : "dark");

  return `
    <div>
      <h1>Parent</h1>
      <p>${theme}</p>
      <button onclick="setTheme()">테마 변경</button>
      ${Child()}
    </div>
    `;
}