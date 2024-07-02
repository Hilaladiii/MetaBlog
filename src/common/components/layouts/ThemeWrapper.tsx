import ClientThemeWrapper from "./ClientThemeWrapper";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientThemeWrapper>{children}</ClientThemeWrapper>;
}
