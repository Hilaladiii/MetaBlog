import { useTheme } from "@/common/hooks/useTheme";
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <div className="dark:bg-dark2">
      <Navbar initialTheme={theme} />
      <div className="dark:bg-dark2 h-32 w-full" />
      <div>
        <div className="mx-auto max-w-[68em]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
