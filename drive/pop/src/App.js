import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopUsersPage from "./pages/TopUsersPage";
import TrendingPostsPage from "./pages/TrendingPostsPage";
import FeedPage from "./pages/FeedPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/top-users" element={<TopUsersPage />} />
        <Route path = "/trending=posts" element={<TrendingPostsPage />} />
        <Route path = "/feed" element={<FeedPage />} />

      </Routes>
    </Router>
  );
};

export default App;