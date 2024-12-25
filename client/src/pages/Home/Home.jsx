import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import FindMenu from "../../components/FindMenu/FindMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import FAQ from "../../components/Faq/Faq";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <FindMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <FAQ />
    </>
  );
}

export default Home;
