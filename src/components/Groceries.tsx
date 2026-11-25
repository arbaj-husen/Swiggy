import { groceriesData } from "../utils/GroceriesData";
import GroceriesCard from "./GroceriesCard";
import { useRef } from "react";
import ScrollBtn from "./ScrollBtn";

export default function Groceries() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		scrollRef.current?.scrollBy({
			left: -500,
			behavior: "smooth",
		});
	};

	const scrollRight = () => {
		scrollRef.current?.scrollBy({
			left: 500,
			behavior: "smooth",
		});
	};

	return (
		<div className="w-70/100 mx-auto mt-20 overflow-x-clip">
			<ScrollBtn
				text="Shop groceries on Instamart"
				scrollLeft={scrollLeft}
				scrollRight={scrollRight}
			/>
			<div
				ref={scrollRef}
				className="flex gap-8 overflow-x-auto pt-6 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
				{groceriesData.map((data) => (
					<GroceriesCard
						key={data.id}
						image={data.imageId}
						link={data.action.link}
						name={data.action.text}
					/>
				))}
			</div>
		</div>
	);
}
