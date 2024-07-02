import { cookies } from "next/headers";

type TTheme = { theme: "light" | "dark" };

export function useTheme(): TTheme {
  const cookieStore = cookies();
  const theme =
    (cookieStore.get("theme")?.value as "light" | "dark") || "light";
  return { theme };
}
