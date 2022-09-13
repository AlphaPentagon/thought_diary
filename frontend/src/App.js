import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Diary from "./pages/Diary.js";
import NewThought from "./pages/NewThought.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/newThought" element={<NewThought />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
