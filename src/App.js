import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reviews from "./pages/reviews/Reviews";

import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";

import Pipeline from "./pages/pipeline/Pipeline";
import Pipelist from "./pages/pipelist/Pipelist";
import Pipeline_add from "./pages/pipeline_add/Pipeline_add";
import Pipeline_redact from "./pages/pipeline_redact/Pipeline_redact";


import { Button, ConfigProvider, Space, theme } from 'antd';

function App() {
  return (
    <>
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#7B0ADD",
        colorInfo: "#ffb338",
        colorSuccess: "#e57924",
        colorBgBase: "#000000",
        wireframe: false,
        borderRadius: 3
      },
      algorithm: [
        theme.darkAlgorithm
      ]
    }}>
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pipelist" element={<Pipelist />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/pipeline_add" element={<Pipeline_add />} />
          <Route path="/pipeline_redact" element={<Pipeline_redact />} />
          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ConfigProvider>
    </>
  );
}

export default App;
