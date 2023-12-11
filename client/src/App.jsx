import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import Gradient from "./pages/Gradient";
import GenerateFromImage from "./pages/GenerateFromImage/GenerateFromImage";
import About from "./pages/About";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />}></Route>
				<Route path="/generate/:id" element={<Generate />}></Route>
				<Route path="/generate/" element={<Generate />}></Route>
				<Route path="/generate/image" element={<GenerateFromImage />}></Route>
				<Route path="/gradient/" element={<Gradient />}></Route>
				<Route path="/gradient/:id" element={<Gradient />}></Route>
				<Route path="/about/" element={<About />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
