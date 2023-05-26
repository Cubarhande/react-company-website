import React from "react";
import web from "../src/images/imagetwo.png";
import Commom from "./Commom";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Commom
        title="Product Development Expertise & Accelerated Engineering on Demand"
        imgser={web}
        visit="/service"
        btnname="Get Started"
        subtitle="Software development and UX Design for Startups
determined to lead in the digital."
      />
      <Service />
    </>
  );
};

export default Home;
