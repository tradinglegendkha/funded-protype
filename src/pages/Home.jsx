import {
  Navbar,
  Header,
  Testimonials,
  SupportedBrokers,
  StarsCanvas,
  WindCanvas,
  WhyUs,
  EvaluationsHeader,
  Faq,
  Footer,
} from "../components";
import { OneStepEval, EODEval } from "../constants/evalcon";

const Home = () => {
  return (
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
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
