"use client";

import AdminNavbar from "../fragments/AdminNavbar";

export default function WriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <AdminNavbar />
      <div className="w-full md:ml-60">{children}</div>
    </div>
  );
}
