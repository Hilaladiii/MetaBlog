import { cookies } from "next/headers";
import ClientThemeWrapper from "./ClientThemeWrapper";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie ? themeCookie.value : "light";

  return (
    <ClientThemeWrapper initialTheme={theme}>{children}</ClientThemeWrapper>
  );
}
