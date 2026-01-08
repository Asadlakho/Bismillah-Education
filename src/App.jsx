import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Levels from "./pages/Levels";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Programs from "./pages/Programs";
import Loader from "./components/Loader"; 
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

           {/* Login */}
        <Route path="/login" element={<Login />} />
           {/*Registration */}
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
