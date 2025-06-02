import styles from "../page.module.css";
import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar";
import Footer from "../components/Footer/Footer";
import StockValuation from "../components/Articles/StockValuation";


export default function Liitintress() {
  return (
    <>
    <ResponsiveNavbar/>
    <StockValuation/>
    <Footer/>
    </>
  );
}
