import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
	return (
		<>
			<NavBar />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
