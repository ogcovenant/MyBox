"use client";

import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
