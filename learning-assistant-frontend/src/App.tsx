import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notification from "./components/common/Notification";
import TopicsLibraryPage from "./pages/TopicsLibraryPage";

function App() {
  return (
    <Router>
      <Notification />
      <Routes>
        {/* Topics Library Page */}
        <Route path="/" element={<TopicsLibraryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
