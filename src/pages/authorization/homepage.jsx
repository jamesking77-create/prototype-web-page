import React from "react";
import Navbar from "../../utils/reusableComponents/navbar";
import TopSection from "../../utils/reusableComponents/topSection";
import MiddleSection from "../../utils/reusableComponents/middleSection";
import BottomSection from "../../utils/reusableComponents/bottomSection";
import Footer from "../../utils/reusableComponents/footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <TopSection />
      <MiddleSection />
      <BottomSection/>
      <Footer/>
    </div>
  );
}
export default Homepage;
