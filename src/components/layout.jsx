import React from "react";
import Header from "./header";
import Banner from "./banner";
import Feature from "./feature";
import Course from "./course";
import Newsletter from "./newsletter";
import Footer from "./footer";
import Footers from "./footers";
import { features } from "../mocks/features.mock";
import { courses } from "../mocks/courses.mock";


function Layout() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Newsletter/>
      <Footer/>
      <Footers/>
      <Feature data={features} />
      <Course data={courses} />
    </div>
  );
}

export default Layout;
