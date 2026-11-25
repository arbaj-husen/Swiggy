import { useState } from "react";
import FoodDeliveryCitiesCard from "../FoodDeliveryCitiesCard";

export default function BestPlaces({
	brands,
	name,
}: {
	brands?: {
		text: string;
		link: string;
	}[];
	name: string;
}) {
	const [more, setMore] = useState<boolean>(false);

	const datas = brands?.length! > 2 ?  more ? brands : brands?.slice(0, 11) : brands 

	return (
		<div className="w-80/100 mx-auto mt-10">
			<div className="text-2xl font-bold">{name}</div>
			<div className="grid grid-cols-4 gap-6 mt-4">
				{datas?.map((data) => (
					<FoodDeliveryCitiesCard
						key={data.link}
						link={data.link}
						text={data.text}
					/>
				))}
				<div className={brands?.length!>2?"w-[cal(25%-32px)] border border-gray-400 p-3 rounded-lg":"hidden"}>
					<div
						className="text-sm text-center cursor-pointer flex w-full h-full justify-center items-center text-[#FF5200] font-bold"
						onClick={() => setMore(!more)}>
						{more ? "Show Less" : "Show More"}
						<svg
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							aria-hidden="true"
							stopColor="rgba(2, 6, 12, 0.92)">
							<path
								d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402s.789-.223.992-.402a5.4 5.4 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106"
								fill="#FF5200"
								fillOpacity="0.92"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
