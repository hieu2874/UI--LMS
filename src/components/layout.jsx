import React from "react";
import Header from "./header";
import Banner from "./banner";
import Feature from "./feature";
import Course from "./course";
import Newsletter from "./newsletter";
import Footer from "./footer";


function Layout() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Feature />
      <Course />
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Layout;
