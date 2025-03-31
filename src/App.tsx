import Generate from "./pages/Generate";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Airdrop from "./pages/Airdrop";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

import Faq from "./pages/Faq";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />   
          <Route path="/airdrop" element={<Airdrop />} /> 
          <Route path="/privacy" element={<Privacy />} />   
          <Route path="/faq" element={<Faq />} />  
          <Route path="/about" element={<About />} />                            
        </Routes>
      </BrowserRouter>
  
  );

}

export default App;