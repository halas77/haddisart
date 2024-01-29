import Image from "next/image";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Services />
      <Products />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
