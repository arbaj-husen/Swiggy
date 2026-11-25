import { useEffect, useState } from "react";
import type { Card, Root } from "../API_Response/APIResponse";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantTop from "./RestaurantTop";
import RestaurantInDelhi from "./RestaurantsInDelhi";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import BestPlaces from "./BestPlaces";
import Footer from "../Footer";
import ShimmerEffectRestaurants from "../ShimmerEffect";

export default function Restaurants() {
	const [data, setData] = useState<Card[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		async function getRestaurant() {
			try {
				const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
				const api =
					"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
				setLoading(true);
				const response = await fetch(PROXY_URL + api);

				if(!response.ok){
					throw new Error(`HTTP Error: ${response.status}`)
				}

				const root: Root = await response.json();
				console.log(root.data.cards);
				setLoading(false);
				setError(false);
				setData(root.data.cards);

			} catch (err: unknown) {
				setLoading(false);
				setError(true);
				if (err instanceof Error) {
					console.log(err.message);
				} else {
					console.log(err);
				}
			}
		}
		getRestaurant();
	}, []);

	if (loading) {
		console.log("hello");
		return (
			<ShimmerEffectRestaurants/>
		);
	}

	if(error){
		return(
			<h1 className="grid place-items-center w-screen h-screen">Unknown Error Occured</h1>
		)
	}

	return (
		<>
			<div className="bg-white mb-15">
				<RestaurantHeader />
				<div className="font-bold mt-25 w-[80%] mx-auto text-2xl">
					What's on your mind?
				</div>

				<div className="w-80/100 flex gap-4 overflow-x-scroll scrollbar-none [&::-webkit-scrollbar]:hidden mx-auto">
					{data[0]?.card?.card?.imageGridCards?.info?.map((value) => (
						<RestaurantTop
							key={value.id}
							link={value.action.link}
							image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${value.imageId}`}
						/>
					))}
				</div>

				<div className="border border-gray-500 my-15 w-80/100 mx-auto"></div>
				<RestaurantInDelhi
					restaurants={
						data[1]?.card?.card?.gridElements?.infoWithStyle
					}
				/>

				<div className="border border-gray-500 my-15 w-80/100 mx-auto"></div>

				<OnlineFoodDelivery
					restaurants={
						data[4]?.card?.card?.gridElements?.infoWithStyle
					}
				/>
				<BestPlaces
					brands={data[6]?.card?.card?.brands}
					name="Best Places to Eat Across Cities"
				/>
				<BestPlaces
					brands={data[7]?.card?.card?.brands}
					name="Best Cuisines Near Me"
				/>
				<BestPlaces
					brands={data[8]?.card?.card?.brands}
					name="Explore Every Restaurants Near Me"
				/>
			</div>
			<div className="bg-[#f1eff5]">
				<Footer />
			</div>
		</>
	);
}
