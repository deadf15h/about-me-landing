import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import AboutMePage from "./pages/about-me.page/about-me.page";
import HehePage from "./pages/hehe/hehe.page";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<AboutMePage />} />
						<Route path="/hehe" element={<HehePage />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
