interface DineoutDataType {
	image: string;
	name: string;
	link:string;
	rating: string;
	cuisines: string[];
	costForTwo: string;
	location: string;
	locationDistance: string;
	vendorOffer:
		| {
				title: string;
				subtitle: string;
				subtext: string;
				style: {
					textColour: string;
					bgColour: string;
				};
				subtextStyle: {};
		  }
		| undefined;
	couponOffer: string;
	customerOffer: string;
}

export default function DineoutCard(prop: DineoutDataType) {
	return (
		<a 
		href={prop.link}
		className="w-fit duration-300 shadow-[0px_4px_10px_black] rounded-xl hover:scale-102">
			<div className="relative">
				<img
					className="h-47 min-w-82 rounded-tr-2xl rounded-tl-2xl"
					src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${prop.image}`}
					alt=""
				/>
				<div className="text-white flex justify-between px-3  z-10 absolute bottom-0 font-bold text-xl  w-full  bg-linear-to-t from-black to-transparent">
					<div className="">{prop.name}</div>
					<div className="flex items-center gap-1">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<circle
								cx="8.00005"
								cy="7.99999"
								r="7.2"
								fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"></circle>
							<path
								d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
								fill="white"></path>
							<defs>
								<linearGradient
									id="StoreRating16_svg__paint0_linear_32982_71565"
									x1="8.00005"
									y1="0.799988"
									x2="8.00005"
									y2="15.2"
									gradientUnits="userSpaceOnUse">
									<stop stopColor="#21973B"></stop>
									<stop
										offset="1"
										stopColor="#128540"></stop>
								</linearGradient>
							</defs>
						</svg>
						<div>{prop.rating}</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between text-gray-500 px-2 text-sm mt-2">
				<div className="w-60/100 overflow-hidden">
					{prop.cuisines.map((value) => `${value}' `)}
				</div>
				<div>{prop.costForTwo}</div>
			</div>
			<div className="flex justify-between px-2 text-[13px] text-gray-500 whitespace-nowrap">
				<div className="w-80/100 overflow-hidden text-ellipsis ">
					{prop.location}
				</div>
				<div>{prop.locationDistance}</div>
			</div>
			<div className={prop.vendorOffer===undefined? 'hidden':'flex items-center font-bold text-white text-[14px] bg-[#02a066] mt-4 mx-2 py-2 pl-2 pr-1.5 rounded-lg justify-between'}>
				<div className="flex items-center gap-2">
					<img 
						className="size-6"
						src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
						alt="discount image"
					/>
					<div>{`${prop.vendorOffer?.title} ${prop.vendorOffer?.subtitle}`}</div>
				</div>
				<div className="text-[13px]">{prop.vendorOffer?.subtext}</div>
			</div>

			<div 
			className="mt-2 mx-2 bg-[#bdffe5] py-1.5 px-2.5 rounded-lg text-green-700 text-[16px]"
			>{prop.customerOffer}</div>

			<div
			className="my-2 mx-2 text-[#700fbe] text-[15px]"
			>{prop.couponOffer}</div>
		</a>
	);
}
