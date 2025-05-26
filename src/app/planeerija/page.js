import styles from "../page.module.css";
import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar";
import Footer from "../components/Footer/Footer";
import Planner from "../components/Planner/Planner";


export default function Planeerija() {
  return (
    <>
    <ResponsiveNavbar/>
    <Planner/>
    <Footer/>
    </>
  );
}
