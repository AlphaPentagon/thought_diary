import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Diary from "./pages/Diary.js";
import NewThought from "./pages/NewThought.js";
import UpdateThought from "./pages/UpdateThought.js";
import Container from "react-bootstrap/Container";
import ThoughtContext from "./components/ThoughtContext.js";

function App() {
  const [currentThought, setCurrentThought] = useState([]);
  return (
    <Container
      className="d-flex flex-column justify-content-between p-0"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <ThoughtContext.Provider value={[currentThought, setCurrentThought]}>
        <BrowserRouter>
          <Navbar />
          <div className="pages p-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/newThought" element={<NewThought />} />
              <Route path="/UpdateThought" element={<UpdateThought />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ThoughtContext.Provider>
    </Container>
  );
}

export default App;
