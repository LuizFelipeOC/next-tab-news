import Header from "@/src/custom-components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab News | Next Tab News",
  description: "Home page of NextTab News",
};


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      
        {children}
    </div>
  );
}