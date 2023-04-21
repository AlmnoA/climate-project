import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Wario from "./FullArticle";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Wario" element={<Wario/>}/>
          {/* <Route path="HelpClimate" element={<Articles/>}/>
          <Route path="Dinosaurs" element={<Articles/>}/>
          <Route path="Nuclear" element={<Articles/>}/>
          <Route path="Doomed" element={<Articles/>}/>
          <Route path="Recycle" element={<Articles/>}/>
          <Route path="SolarPower" element={<Articles/>}/>
        <Route path="NotDoomed" element={<Articles/>}/>
        <Route path="Desalination" element={<Articles/>}/> */}
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
