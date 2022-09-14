import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Diary from "./pages/Diary.js";
import NewThought from "./pages/NewThought.js";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar />
        <div className="pages p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/newThought" element={<NewThought />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
