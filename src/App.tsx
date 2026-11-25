import { BrowserRouter, Route, Routes } from "react-router";
import Restaurants from "./components/Restaurants/Restaurant";
import HomeScreen from "./components/HomeScreen";
import RestaurantsMenu from "./components/RestaurantsMenu/RestaurantsMenu";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeScreen/>}/>
				<Route path="/restaurants" element={<Restaurants/>}/>
				<Route path="/city/delhi/:id" element={<RestaurantsMenu/>}/>
			</Routes>
		</BrowserRouter>
	);
}


// “https: //cors-anywhere.herokuapp.com/";
// https://cors-anywhere.herokuapp.com/corsdemo