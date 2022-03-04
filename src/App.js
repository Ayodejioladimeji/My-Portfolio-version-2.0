// PACKAGES
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import styles from "./App.module.css";
import Onboarding from "./components/onboarding/Onboarding";

function App() {
  const [pageLoad, setPageLoad] = useState(false);
  const [loading, setLoading] = useState(true);

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
      </div>
    </Router>
  );
}

export default App;
