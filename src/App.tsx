import {Route, Routes, HashRouter} from "react-router-dom";
import ScrollTop from "@/components/molecules/ScrollTop";
import "./index.css";

import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ProjectsPage from "@/components/pages/ProjectsPage";

function App() {
	return (
	<HashRouter>
		<ScrollTop />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/projects" element={<ProjectsPage />} />
		</Routes>
    </HashRouter>
	);
}

export default App;
