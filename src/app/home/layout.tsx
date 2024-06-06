"use client";

import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Logo from "../../../components/Logo";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { user, loading: isLoading, error: authError } = useAuth();

  useEffect(() => {
    // if () {
    // @ts-ignore
    if (!user && !user.id && authError) {
      router.replace("/login");
      // }
    }
  }, [user, isLoading]);

  return (
    <html lang="en">
      <body className="h-screen max-h-screen overflow-y-hidden flex">
        {isLoading ? (
          <div className="w-screen h-full flex justify-center items-center animate-pulse bg-white absolute">
          <Logo />
        </div>
        ) : (
          <>
            {
              //@ts-ignore
              user.id && (
                <div className="flex w-full max-h-screen overflow-hidden ">
                  <div className="w-1/5">
                    <Sidebar />
                  </div>
                  <div className="w-4/5 overflow-y-auto">
                    <Header />
                    {children}
                  </div>
                </div>
              )
            }
          </>
        )}
      </body>
    </html>
  );
}
