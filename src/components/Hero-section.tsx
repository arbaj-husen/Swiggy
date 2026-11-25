import HeroSectionFirst from "./Hero-section-first";
import Card from "./Card";

export default function HeroSection() {
	const images = [
		{
			image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png",
			link: "restaurants",
		},
		{
			image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png",
			link: "https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
		},
		{
			image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png",
			link: "https://www.swiggy.com/dineout",
		},
	];
	return (
		<div className="w-full relative ">
			<img
				className="h-112.5 w-62.5 absolute left-0 top-0 object-cover"
				src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
				alt="left-image"
			/>
			<img
				className="w-62.5 h-112.5 absolute top-0 right-0 object-cover"
				src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
				alt="right-image"
			/>
			<HeroSectionFirst />

			<div className="flex max-w-[80%] mx-auto min-w-80 mb-4">
				{images.map((obj) => (
					<Card key={obj.link} image={obj.image} link={obj.link} />
				))}
				<div className="overflow-x-visible"></div>
			</div>
		</div>
	);
}
