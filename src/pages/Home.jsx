import React from "react";
import Header from "../components/Header";
import Add from "../components/Add";
import Expenses from "../components/Expenses";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="max-w-[600px] mx-auto ">
      <Header />
      <Add />
      <Expenses />
      <Footer />
    </div>
  );
}

export default Home;
