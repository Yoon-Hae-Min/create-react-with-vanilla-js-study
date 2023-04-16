import Parent from "./Parent.js";
import { createContext, useState } from "./React.js";

export const ThemeContext = createContext(null);
export const CountContext = createContext(null);

export default function App() {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState("dark");

  return `
    ${ThemeContext.Provider({
    value: { theme, setTheme },
    children: () => ` 
        ${CountContext.Provider({
      value: { count, setCount },
      children: Parent,
    })}
      `,
  })
    }
      `;

}