// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";

// // import whyneedSec from "./pages/whyneedSec";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <About />
//       <Services />
//       <Projects />

//       {/* <whyneedSec /> */}
//       <Footer />


//       {/* <div className="h-screen flex items-center justify-center">
//         <h1 className="text-5xl font-bold">
//           AP Solutions
//         </h1>
//       </div> */}
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/services" element={<Services />} />
        <Route path="/pages/portfolio" element={<Portfolio />} />
        <Route path="/pages/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;