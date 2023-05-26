import React from "react";
import web from "../src/images/imagethree.png";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        title="Product Development Experts
        We help bring your product"
        imgser={web}
        visit="/contact"
        btnname="Contact Now"
        subtitle="Our name, Tech web, comes from the tech headed mindset we have, for technology innovation."
      />
    </>
  );
};

export default About;
