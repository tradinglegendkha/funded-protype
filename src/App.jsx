import {
  Navbar,
  Header,
  Testimonials,
  SupportedBrokers,
  StarsCanvas,
  WindCanvas,
  WhyUs,
  EvaluationsHeader,
} from "./components";
import {
  OneStepEval,
  FastStepEval,
  EODEval,
  StaticEval,
  DiamondHandsEval,
} from "./constants/evalcon";

import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-new-header bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Header />
            {/* <WindCanvas /> */}
          </div>
          {/* <StarsCanvas /> */}
        </div>
        <Testimonials />
        <SupportedBrokers />
        {/* social media that mentions wolf */}
        <WhyUs />
        <EvaluationsHeader evaluations={OneStepEval.slice(0, 3)} />
        <EvaluationsHeader evaluations={EODEval.slice(0, 3)} />
        {/* FAQ */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
