import { useState } from "react";
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  return { isDark, setIsDark };
};
