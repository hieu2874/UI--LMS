import React, { useEffect, useState } from "react";
import Header from "./header";
import Banner from "./banner";
import Feature from "./feature";
import Course from "./course";
import Newsletter from "./newsletter";
import Footer from "./footer";
import Footers from "./footers";
import { features } from "../data/features";
import { courses } from "../data/courses";



function Layout() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    console.log("Query changed:", query);
  }, [query])
  return (
    <div className="App">
      <Header 
      query={query} 
      setQuery={setQuery}
      features = {features}
      courses = {courses}
      />
      <Banner />
      <Feature query={query} />
      <Course query={query} />
      <Newsletter />
      <Footer />
      <Footers />
    </div>
  );
}

export default Layout;
