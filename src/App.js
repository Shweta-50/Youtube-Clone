import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppContext } from "./context/contextApi";

function App() {
  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />

            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
