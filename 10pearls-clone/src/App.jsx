import Header from "./components/Header";
import HeroCarousel from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import Footer from "./components/Footer";
import Company from "./components/Company";
import Advantage from "./components/Advantage";
import Awards from "./components/Awards";
import Insight from "./components/Insight";
import Yellow from "./components/Yellow";
import Slider from "./components/Slider.jsx";
import Lets from "./components/Lets.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HeroCarousel/>
      <ExpertiseSection />
      <Company/>
      <Advantage/>
      <Awards/>
      <Insight/>
      <Yellow/>
      <Slider/>
      <Lets/>
      <Footer />
    </>
  );
}

export default App;