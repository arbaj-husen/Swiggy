import ScrollBtn from "./ScrollBtn";
import { useRef } from "react";
import { dineoutRestaurants } from "../utils/DineoutData";
import DineoutCard from "./DineoutCard";



export default function RestaurantsOnDineout() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		scrollRef.current?.scrollBy({
			left: -750,
			behavior: "smooth",
		});
	};

	const scrollRight = () => {
		scrollRef.current?.scrollBy({
			left: 750,
			behavior: "smooth",
		});
	};



	return (
		<div className="w-70/100 mx-auto mt-20">
			<ScrollBtn
				text="Discover best restaurants on Dineout"
				scrollLeft={scrollLeft}
				scrollRight={scrollRight}
			/>

			<div 
			ref={scrollRef}
			className="flex gap-4 overflow-scroll scrollbar-none [&::-webkit-scrollbar]:hidden mt-6 p-4">
				{dineoutRestaurants.map((data) => (
					<DineoutCard 
					key={data.info.id}
                    image={data.info.mediaFiles[0].url}
                    name = {data.info.name}
					link = {data.cta.link}
                    rating={data.info.rating.value}
                    cuisines = {data.info.cuisines}
                    costForTwo = {data.info.costForTwo}
                    location = {data.info.locationInfo.formattedAddress}
                    locationDistance = {data.info.locationInfo.distanceString}
                    vendorOffer = {data.info.offerInfoV3.vendorOffer}
                    couponOffer = {data.info.offerInfoV3.couponOffer.title}
                    customerOffer = {data.info.customerOffer.infos[0].description}
                     />
				))}
			</div>
		</div>
	);
}
