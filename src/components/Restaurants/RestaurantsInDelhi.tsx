import type { InfoWithStyle } from "../API_Response/APIResponse";
import RestaurantInDelhiCard from "./RestaurantInDelhiCard";

export default function RestaurantInDelhi({
	restaurants,
}: {
	restaurants?: InfoWithStyle;
}) {
	return (
		<div className="w-80/100 mx-auto">
			<div className="text-2xl font-bold mb-6">
				Top restaurant chains in Delhi
			</div>

			<div className="flex overflow-x-scroll scrollbar-thumb-red-500 scroll-smooth gap-6">
				{restaurants?.restaurants?.map((data) => (
					<RestaurantInDelhiCard
						key={data?.info?.id}
						requestId={data?.info?.id}
						imageSize="min-w-68.25 w-68.25 h-45.5 min-h-45.5"
						image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info.cloudinaryImageId}`}
						name={data?.info.name}
						rating={data?.info.avgRatingString}
						time={data?.info.sla.slaString}
						cuisines={data?.info.cuisines}
					/>
				))}
			</div>
		</div>
	);
}
