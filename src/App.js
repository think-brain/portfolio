import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./ui/components/Footer";
import JoinCTA from "./ui/components/JoinCTA";
import Navbar from "./ui/components/Navbar";
import Gettings from "./ui/screens/Gettings";
import Home from "./ui/screens/Home";
import Offering from "./ui/screens/Offering";
import Syllabus from "./ui/screens/Syllabus";

function App() {
  return (
    <Router>
        <Navbar />
        <Home />
        <JoinCTA />
        {/* <Offering /> */}
        <Syllabus />
        <Gettings />
        <Footer />
    </Router>
  );
}

export default App;
