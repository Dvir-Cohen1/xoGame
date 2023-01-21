import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage, GameBoard, Faq, Contact } from "./pages/index";
import './services/socketService'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/gameboard" element={<GameBoard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="/*" element={<div>Not Found!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
