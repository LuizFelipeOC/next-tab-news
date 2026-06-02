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
  return <div>{children}</div>;
}