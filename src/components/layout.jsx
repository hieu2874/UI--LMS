import React from "react";
import Header from "./header";
import Banner from "./banner";
import Newsletter from "./newsletter";
import Footer from "./footer";
import Footers from "./footers";
import Feature from "./feature";
import Course from "./course";

function Layout() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Newsletter/>
      <Footer/>
      <Footers/>
      <Course />
      <Feature />
      
    </div>
  );
}

export default Layout;
