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

function App() {
  const [pageLoad, setPageLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [state] = useContext(Context);
  const { nav } = state;

  useEffect(() => {
    if (pageLoad) {
      setTimeout(() => {
        setLoading(false);
      }, 12000);
    }
  }, [pageLoad]);

  if (loading) {
    return <Onboarding pageLoad={pageLoad} setPageLoad={setPageLoad} />;
  }

  return (
    <Router>
      <div className={styles.main}>
        <Navbar />
        <Routes />
        <ChatwootWidget />
        {nav && <NavTab />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
