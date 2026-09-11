import React from "react";

// import ActionAreaCard from "../components/Card";
import Services from "./Services";
import ReviewSlider from "../components/CustomerReviewe";

const Home = () => {
  return (
    <main>
      {/* Main Cleaning Services */}
      <section aria-label="PrimeClean Services">
        <Services />
      </section>

      {/* Customer Reviews */}
      <section aria-label="Customer Reviews">
        <ReviewSlider />
      </section>
    </main>
  );
};

export default Home;
