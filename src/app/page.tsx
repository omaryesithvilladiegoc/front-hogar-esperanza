import Inicio from "../components/LadingPage/Home";
import ContactSection from "../components/LadingPage/contact";
import Gallery from "../components/LadingPage/gallery";
import Plans from "../components/LadingPage/plans";

export default function Home() {
  return (
    <div>
      <Inicio />
      <Gallery />
      <Plans />
      <ContactSection />

    </div>
  );
}
