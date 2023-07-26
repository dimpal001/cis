import React, { useEffect, useState } from "react";
import About from "./Components/About/about";
import Colleges from "./Components/Colleges/colleges";
import Error from "./Components/Error/error";
import axios from "axios";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Homepage/home";
import Navbar from "./Components/Navbar/navbar";
import Services from "./Components/Services/services";

// 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


import {
  Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Loading from "./Components/Loading/loading";
import CollegeDetails from "./Components/CollegeDetails/collegeDetails";



function App() {
  const [college, setCollege] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    axios.get("https://cis-api.onrender.com/api/colleges").then((res) => {
      setCollege(res.data);
    });
  }, []);
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
          <Route path="/colleges/:college_name" element={<CollegeDetails />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
