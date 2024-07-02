"use client";

import { useEffect, useState } from "react";

export default function ClientThemeWrapper({
  initialTheme,
  children,
}: {
  initialTheme: string;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const handleCookieChange = () => {
      const updatedTheme = document.cookie
        .split("; ")
        .find((row) => row.startsWith("theme="))
        ?.split("=")[1];
      if (updatedTheme) {
        setTheme(updatedTheme);
      }
    };

    const customEventListener = () => {
      handleCookieChange();
    };

    window.addEventListener("themeChange", customEventListener);

    return () => {
      window.removeEventListener("themeChange", customEventListener);
    };
  }, []);

  return <div className={theme === "dark" ? "dark" : ""}>{children}</div>;
}
