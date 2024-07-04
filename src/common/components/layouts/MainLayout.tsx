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
      <div className="h-32 w-full dark:bg-dark2" />
      <div className="mx-auto w-full px-5 md:max-w-[68em] md:px-0">
        {children}
      </div>
      <Footer />
    </div>
  );
}
