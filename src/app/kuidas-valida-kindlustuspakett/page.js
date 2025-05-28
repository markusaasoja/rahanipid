import styles from "../page.module.css";
import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar";
import Footer from "../components/Footer/Footer";
import KindlustusValik from "../components/Articles/KindlustusValik";


export default function Liitintress() {
  return (
    <>
    <ResponsiveNavbar/>
    <KindlustusValik/>
    <Footer/>
    </>
  );
}
