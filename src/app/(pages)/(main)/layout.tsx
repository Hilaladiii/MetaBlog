import MainLayout from "@/common/components/layouts/MainLayout";
import ThemeWrapper from "@/common/components/layouts/ThemeWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <MainLayout>{children}</MainLayout>
    </ThemeWrapper>
  );
}
