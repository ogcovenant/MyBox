"use client"

import Sidebar from "../../../components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div>{children}</div>
      </body>
    </html>
  );
}
