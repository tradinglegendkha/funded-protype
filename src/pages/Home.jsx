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
  SeeMore,
} from "../components";
import { OneStepEval, EODEval } from "../constants/evalcon";

const Home = () => {
  return (
    <div>
      <div className="bg-new-header bg-cover bg-no-repeat bg-center">
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
      <SeeMore />
      <EvaluationsHeader evaluations={EODEval.slice(0, 3)} />
      <SeeMore />
      <Faq />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
