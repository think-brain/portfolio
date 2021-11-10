import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./ui/components/Footer";
import Navbar from "./ui/components/Navbar";
import Home from "./ui/screens/Home";
import Offering from "./ui/screens/Offering";
import Syllabus from "./ui/screens/Syllabus";

function App() {
  return (
    <Router>
        <Navbar />
        <Home />
        <Offering />
        <Syllabus />
        <Footer />
    </Router>
  );
}

export default App;
