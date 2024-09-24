import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Presale from "./pages/Presale";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
