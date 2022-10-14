import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Text1 from "./library/text-template/Text1";
import Text2 from "./library/text-template/Text2";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-example-1" element={<Text1 />} />
      </Routes>
    </Router>
  );
}

export default App;
