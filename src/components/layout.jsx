import React, { useEffect, useState } from "react";
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
  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
    console.log("Query changed:", query);
  }, [query])

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites]);


  const toggleFavorite = (id, type) => {
  const key = `${type}-${id}`;
  setFavorites((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));  
};
const favoritesCount = Object.values(favorites).filter(Boolean).length;
  return (
    <div className="App">
      <Header 
      query={query} 
      setQuery={setQuery}
      features = {features}
      courses = {courses}
      />
      <h2 style={{textAlign: "center"}}> ❤️ Favorites: {favoritesCount}</h2>
      <Banner />
      <Feature 
      query={query} />
      <Course
       query={query} 
       onSelectCourse={setSelectedCourse}
       favorites = {favorites}
       toggleFavorite = {toggleFavorite}
        />
      <Newsletter />
      <Footer />
      <Footers />
      <Modal
       isVisible={!!selectedCourse}
       onClose={() => setSelectedCourse(null)} // đóng modal
       course={selectedCourse}
       />
    </div>
  );
}

export default Layout;
