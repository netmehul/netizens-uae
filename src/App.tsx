import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ThankYou } from "./pages/ThankYou";

function App() {
  return (
    <div className="w-full min-h-screen font-sans text-carbon-black bg-white selection:bg-regal-navy selection:text-white flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
