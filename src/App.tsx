import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkFde from "./pages/WorkFde";
import WorkVideo from "./pages/WorkVideo";
import WorkTraining from "./pages/WorkTraining";
import ProjectDetail from "./pages/ProjectDetail";
import Method from "./pages/Method";

/** 路由切换回到顶部（带 hash 时交给页面自己处理） */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/about/profile" replace />} />
          <Route path="/about/:tab" element={<About />} />
          <Route path="/work" element={<Navigate to="/work/fde" replace />} />
          <Route path="/work/fde" element={<WorkFde />} />
          <Route path="/work/fde/:slug" element={<ProjectDetail />} />
          <Route path="/work/video" element={<WorkVideo />} />
          <Route path="/work/training" element={<WorkTraining />} />
          <Route path="/method" element={<Method />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
