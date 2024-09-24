import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Presale from "./pages/Presale";
import News from "./pages/News";
import Not from "./pages/Not";
import Channel from "./pages/Channel";
import Search from "./pages/Search";
import Today from "./pages/Today";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/today' element={<Today />} />
        <Route path="/news" element={<News />} />
        <Route path="/presale" element={<Presale />} />
        <Route path='/channel/:channelId' element={<Channel />} />
        <Route path='/search/:searchId' element={<Search />} />
        <Route path="/*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
