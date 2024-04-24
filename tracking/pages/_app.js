import "../styles/globals.css";

//INTERNAL IMPORT
import { Footer, Banner, NavBar } from "../Components";
import { TrackingProvider } from "../Context/TrackingContext";
import Sidebar from "../Components/Sidebar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
      <Sidebar>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        </Sidebar>
      </TrackingProvider>
    </>
  );
}
