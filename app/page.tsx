import { Demo, Hero, Footer } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="app">
        <Hero />
        <Demo />
        <Footer />
      </div>
    </main>
  );
}
