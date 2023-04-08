// PACKAGES
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import { Context } from "./store/Context";
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import styles from "./App.module.css";
import Onboarding from "./components/onboarding/Onboarding";
import Footer from "./components/footer/Footer";
import NavTab from "./components/navtab/NavTab";
import ChatwootWidget from "./common/ChatwootWidget";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [state] = useContext(Context);
  const { menu } = state;

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 20000);
  // }, []);

  // if (loading) {
  //   return <Onboarding />;
  // }

  return (
    <Router>
      <div className={styles.main}>
        <Navbar />
        <Routes />
        <ChatwootWidget />
        {menu && <NavTab />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
