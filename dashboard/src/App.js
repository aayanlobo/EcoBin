import "./App.css";
import Dashboard from "./Dashboard_user/Dashboard";
import Dashboard_admin from "./Dashboard_admin/Dashboard";
import Dashboard_collector from "./Dashboard_collector/Dashboard";
import Login from "./FrontPage/Login/login";
import Home from "./Components/Home";
import Credit from "./Dashboard_user/Credit";
import OrderPlaced from "./Components/OrderPlaced";
import Announcement from "./Dashboard_user/Announcement";
import PostBlog from "./Dashboard_admin/PostBlog";
import BlogSection from "./Dashboard_user/BlogSection";
// import SignIn from "./FrontPage/SignIn/signIn";
import { Routes, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/signup" element={<SignIn />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard_admin" element={<Dashboard_admin />} />
        <Route path="/dashboard_collector" element={<Dashboard_collector />} />
        <Route path="/dashboard/credit" element={<Credit />} />
        <Route path="/dashboard/placed" element={<OrderPlaced />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/dashboard_admin/postblog" element={<PostBlog />} />
        <Route path="/dashboard/blogsection" element={<BlogSection />} />
      </Routes>

      {/* <SignIn /> */}
      {/* <Login /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
