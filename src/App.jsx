import { Navbar, Header, Testimonials, SupportedBrokers } from "./components";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const slides = [
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-header-pattern bg-cover bg-no-repeat bg-center">
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
