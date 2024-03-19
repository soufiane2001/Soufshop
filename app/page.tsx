import Categories from "@/components/categories/page";
import Header from "@/components/header/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-100">
    <Header/>
    <Categories/>
    </main>
  );
}
