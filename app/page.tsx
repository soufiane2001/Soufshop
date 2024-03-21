import Card from "@/components/card/card";
import Categories from "@/components/categories/page";
import Header from "@/components/header/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-100">
    <Header/>
    <Categories/>
    <div className="container  mt-10  shadow-sm  py-7 mx-auto flex justify-around items-center flex-wrap">
     
      <Card/>
      <Card/>
      <Card/>
    </div>


    </main>
  );
}
