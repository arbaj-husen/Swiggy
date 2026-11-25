import { useState } from "react";
import Dropdown from "./Dropdown";
import type { InfoWithStyle } from "../API_Response/APIResponse";
import RestaurantInDelhiCard from "./RestaurantInDelhiCard";

export default function OnlineFoodDelivery({
	restaurants,
}: {
	restaurants?: InfoWithStyle;
}) {
	const [dropdown, setDropdown] = useState<boolean>(false);

	return (
		<div className="w-80/100 mx-auto mt-10">
			<div className="text-xl font-bold">
				Restaurants with online food delivery in Delhi
			</div>
			<div className="border w-fit px-4 py-1 rounded-xl my-4">
				<button onClick={() => setDropdown(!dropdown)}>
					Sort By ▼
				</button>
				<div className={dropdown ? "block relative" : "hidden"}>
					<Dropdown />
				</div>
			</div>
			<div className="grid grid-cols-4 gap-6 ">
				{restaurants?.restaurants.map((value) => (
					<RestaurantInDelhiCard
						key={value?.info?.id}
						requestId={value?.info?.id}
						imageSize="min-w-68.25 min-h-45.5 w-90 h-55"
						image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${value?.info?.cloudinaryImageId}`}
						name={value?.info?.name}
						rating={value?.info?.avgRatingString}
						time={value?.info?.sla?.slaString}
						cuisines={value?.info?.cuisines}
					/>
				))}
			</div>
		</div>
	);
}
