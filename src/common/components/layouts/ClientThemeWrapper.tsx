"use client";

import { useEffect, useState } from "react";

export default function ClientThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }

    const handleThemeChange = () => {
      const updatedTheme = localStorage.getItem("theme") as "light" | "dark";
      setTheme(updatedTheme);
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return <div className={theme === "dark" ? "dark" : ""}>{children}</div>;
}
