// PACKAGES
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import styles from "./App.module.css";

function App() {
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
