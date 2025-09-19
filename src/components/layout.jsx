import React from "react";
import Header from "./header";
import Banner from "./banner";
import Feature from "./feature";
import Course from "./course";
import Newsletter from "./newsletter";
import Footer from "./footer";
import Footers from "./footers";


function Layout() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Feature />
      <Course />
      <Newsletter/>
      <Footer/>
      <Footers/>
    </div>
  );
}

export default Layout;
