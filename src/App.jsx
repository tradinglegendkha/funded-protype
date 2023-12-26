import { Navbar, Header, Testimonials, SupportedBrokers } from "./components";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-new-header bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Header />
          {/* <Carousel autoSlide={true}>
            {slides.map((s) => (
              <img src={s} alt="s" />
              ))}
            </Carousel> */}
        </div>
        <Testimonials />
        <SupportedBrokers />
        {/* benefits body */}
        {/* evaluations */}
        {/* FAQ */}
      </div>
    </BrowserRouter>
  );
}

export default App;
