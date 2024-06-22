import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="mt-36">
        <div className="mx-auto max-w-[68em]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
