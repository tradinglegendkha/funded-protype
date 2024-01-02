import { Navbar, Footer, ScrollWrapper } from "./components";
import { Home, Evaluations, Refer, Rewards, Timeline } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollWrapper>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/evaluations" element={<Evaluations />} />
              <Route path="/refer" element={<Refer />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/timeline" element={<Timeline />} />
              {/* Add other routes for other pages */}
            </Routes>
          </div>
          <Footer />
        </div>
      </ScrollWrapper>
    </BrowserRouter>
  );
}

export default App;
