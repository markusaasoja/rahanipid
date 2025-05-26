import styles from "../page.module.css";
import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar";
import Footer from "../components/Footer/Footer";
import InvestArticle from "../components/InvestArticle/InvestArticle";
import InvestHero from "../components/InvestHero/InvestHero";


export default function Planeerija() {
  return (
    <>
    <ResponsiveNavbar/>
    <InvestHero/>
    <InvestArticle/>
    <Footer/>
    </>
  );
}
