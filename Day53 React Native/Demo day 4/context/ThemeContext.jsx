import { createContext, useState } from 'react';

// 1
export var theme = createContext();

// 2
// export var ThemeProvider =   theme.Provider

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return <theme.Provider value={{ isDark, setIsDark }}>{children}</theme.Provider>;
}
