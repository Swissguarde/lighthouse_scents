import Contact from "@/components/contact";
import { Scents } from "@/components/scents";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-4xl font-bold">
        LIGHTHOUSE INTERIOR DESIGN
      </h2>
      <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
      <div className="mt-20">
        <Scents />
        <div className="grid grid-cols-2 items-center gap-2 w-full mt-6">
          <Contact />
        </div>
      </div>
    </main>
  );
}
