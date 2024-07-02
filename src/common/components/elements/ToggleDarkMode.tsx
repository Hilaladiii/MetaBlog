"use client";
import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export default function ToggleDarkMode({
  initialValue,
}: {
  initialValue: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(initialValue);

  useEffect(() => {
    const cookieTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1] as Theme | undefined;

    if (cookieTheme) {
      setTheme(cookieTheme);
    } else {
      const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(preferredTheme);
      document.cookie = `theme=${preferredTheme};path=/;`;
    }
  }, []);

  useEffect(() => {
    document.cookie = `theme=${theme};path=/;`;
    window.dispatchEvent(new Event("themeChange"));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`flex h-screen items-center justify-center ${theme === "dark" ? "dark" : ""}`}
    >
      <label
        htmlFor="darkModeToggle"
        className="flex cursor-pointer items-center"
      >
        <div className="relative">
          <input
            type="button"
            id="darkModeToggle"
            className="sr-only"
            onClick={toggleTheme}
          />
          <div className="h-8 w-12 rounded-full bg-cloud shadow-inner transition-colors duration-300 dark:bg-sky"></div>
          <div
            className={`absolute left-1 top-1 h-6 w-6 transform rounded-full bg-white transition ${theme === "dark" ? "translate-x-4 bg-gray-800" : ""} flex items-center justify-center`}
          >
            {theme === "dark" ? (
              <div className="h-6 w-6 bg-[url('/sunny.svg')] bg-center bg-no-repeat"></div>
            ) : (
              <div className="h-6 w-6 bg-[url('/sunny.svg')] bg-center bg-no-repeat"></div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
