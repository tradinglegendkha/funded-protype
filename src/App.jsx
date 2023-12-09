import { Navbar, Header } from "./components";
import "./App.css";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Header />
        {/* which will include the review */}
      </div>
      {/* tools of the trade, and supported market */}
      {/* benefits body */}
      {/* evaluations */}
      {/* FAQ */}
    </div>
  );
}

export default App;
