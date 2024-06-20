import Navbar from "@/common/components/fragments/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="mt-36">{children}</div>
    </div>
  );
}
