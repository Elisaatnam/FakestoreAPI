import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Shop from "./pages/Shop";
import Details from "./pages/Details";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/details/:wassermelone' element={<Details />} />
			</Routes>
		</>
	);
}

export default App;
