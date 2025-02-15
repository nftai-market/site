import Generate from "./pages/Generate";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
  
  );

}

export default App;