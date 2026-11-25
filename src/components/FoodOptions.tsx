import FoodOptionsCard from "./FoodOptionsCard";
import { foodOptionsData } from "../utils/FoodOptionsData";
import ScrollBtn from "./ScrollBtn";

import { useRef } from "react";

export default function FoodOptions() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		scrollRef.current?.scrollTo({
			left: 0,
			behavior: "smooth",
		});
	};

	const scrollRight = () => {
		scrollRef.current?.scrollTo({
			left: scrollRef.current.scrollWidth,
			behavior: "smooth",
		});
	};

	return (
		<div className="bg-white">
			<div className="w-70/100 mx-auto overflow-x-clip mt-30 ">
				<ScrollBtn
					text="Order our best food options"
					scrollLeft={scrollLeft}
					scrollRight={scrollRight}
				/>

				<div
					ref={scrollRef}
					className="grid grid-rows-2 grid-flow-col gap-x-8 gap-y-4 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
					{foodOptionsData.map((data) => (
						<FoodOptionsCard
						    key={data.id}
							link={data.entityId}
							image={data.imageId}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
