import rightArrow from "../assests/icons/right-arrow.png";
import leftArrow from "../assests/icons/left-arrow.png";

export default function ScrollBtn({text,scrollLeft,scrollRight}:{
    text:string,
    scrollLeft:()=>void,
    scrollRight:()=>void
}) {
	return (
		<div className="flex justify-between items-center">
			<div className="text-2xl font-semibold">
				{text}
			</div>
			<div className="flex gap-2">
				<button
					onClick={scrollLeft}
					type="button"
					className="bg-gray-300 p-1.5 rounded-[50%] ">
					<img className="size-5" src={leftArrow} alt="" />
				</button>
				<button
					onClick={scrollRight}
					type="button"
					className="bg-gray-300 p-1.5 rounded-[50%]">
					<img className="size-5" src={rightArrow} alt="" />
				</button>
			</div>
		</div>
	);
}
