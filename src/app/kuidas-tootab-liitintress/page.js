import styles from "../page.module.css";
import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar";
import Footer from "../components/Footer/Footer";
import CompoundWorks from "../components/Articles/CompoundWorks";


export default function Article() {
  return (
    <>
    <ResponsiveNavbar/>
    <CompoundWorks/>
    <Footer/>
    </>
  );
}
