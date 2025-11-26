import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notification from "./components/common/Notification";
import TopicsLibraryPage from "./pages/TopicsLibraryPage";
import TopicDetailPageWrapper from "./pages/wrappers/TopicDetailPageWrapper";

function App() {
  return (
    <Router>
      <Notification />
      <Routes>
        {/* Topics Library Page */}
        <Route path="/" element={<TopicsLibraryPage />} />
        {/* Topic Detail Page */}
        <Route path="/topic/:topicId" element={<TopicDetailPageWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
