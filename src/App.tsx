import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import AboutMePage from "./pages/about-me.page/about-me.page";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<AboutMePage />} />

						{/* TODO */}
						<Route path="/hehe" element={<pre />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
