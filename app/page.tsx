import Consultorio from "@/components/sections/Consultorio";
import CTAFinal from "@/components/sections/CTAFinal";
import EspecialidadesGrid from "@/components/sections/EspecialidadesGrid";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SobreNos from "@/components/sections/SobreNos";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <EspecialidadesGrid />
      <SobreNos />
      <Consultorio />
      <CTAFinal />
      <Footer />
    </main>
  );
}
