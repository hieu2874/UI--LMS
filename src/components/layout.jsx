import React, { useEffect, useState } from "react";
import { LmsProvider } from "./LmsContext";
import Header from "./header";
import Banner from "./banner";
import Feature from "./feature";
import Course from "./course";
import Newsletter from "./newsletter";
import Footer from "./footer";
import Footers from "./footers";
import Modal from "./Modal";

import { features } from "../data/features";
import { courses } from "../data/courses";

function Layout() {
  return (
    <LmsProvider>
      <div className="App">
        <Header />
        <Banner />
        <Feature />
        <Course />
        <Newsletter />
        <Footer />
        <Footers />
        <Modal />
      </div>
    </LmsProvider>
  );
}

export default Layout;
