import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

        {/* Individual Service Pages */}
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
