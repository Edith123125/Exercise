import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import Counter from "./components/Counter";
import ImageGallery from "./components/ImageGallery";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<TaskManager />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/image-gallery" element={<ImageGallery />} />
      <Route path="/data-fetching" element={<DataFetching />} />
    </Routes>
  );
}

export default App;
