import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicsLibraryPage from "./pages/TopicsLibraryPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Topics Library Page */}
        <Route path="/" element={<TopicsLibraryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
