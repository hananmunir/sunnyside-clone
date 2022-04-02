import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Middle from "../../Components/MiddleSection/Middle";
import Testimonies from "../../Components/Testimonies/Testimonies";
import Bottom from "../../Components/BottomSection/Bottom";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Middle />
      <Testimonies />
      <Bottom />
      <Footer />
    </>
  );
}
