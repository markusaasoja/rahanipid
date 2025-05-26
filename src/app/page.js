import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveNavbar from "./components/ResponsiveNavbar/ResponsiveNavbar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Charts from "./components/Charts/Charts";
import Stats from "./components/Stats/Stats";
import Banks from "./components/Banks/Banks";
import CompoundMini from './components/Compound/CompoundMini'
import Footer from "./components/Footer/Footer";



export default function Home() {
  return (
    <>
    <ResponsiveNavbar/>
    <Hero/>
    <Destinations/>
    <Charts/>
    <Stats/>
    <Banks/>
    <CompoundMini/>
    <Footer/>
    </>
  );
}
