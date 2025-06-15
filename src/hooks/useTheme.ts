import { useEffect, useState } from "react";

const useTheme = (): string => {
  const [themeValue, setThemeValue] = useState("");

  useEffect(() => {
    setThemeValue(
      document.documentElement.classList.contains("light") ? "light" : "dark",
    );
  }, []);

  return themeValue;
};

export default useTheme;
