import { useState } from "react";
import searchIcon from "../assests/icons/search-icon.svg";

export default function HeroSectionFirst() {
    const [arrow,setArrow] = useState<boolean>(false)
	return (
		<div className="relative flex flex-col pt-16 pb-8 w-fit mx-auto z-100">
			<div className="text-5xl text-center w-[60%] text-white font-gilroy font-semibold leading-14 tracking-[-0.3px] mx-auto">
				Order food & groceries. Discover best restaurants. Swiggy it!
			</div>
			<div className="flex mt-6 justify-center space-x-4">
				<div className="flex bg-white px-5 py-4 rounded-xl space-x-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 18 23"
						fill="none">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
							fill="#FF5200"></path>
					</svg>
					<input
						className="outline-none"
						placeholder="Enter your delivery location"
						type="text"
						id="location"
					/>
					<svg
						width="20"
						height="21"
                        className={`cursor-pointer ${arrow ? "-rotate-180":""} transition duration-150`}
						viewBox="0 0 20 21"
						aria-label="rating-down-down-icon"
						aria-hidden="false"
						stroke="rgba(2, 6, 12, 0.92)"
						strokeWidth={0.2}
						fill="rgba(2, 6, 12, 0.92)"

                        onClick={()=>{
                            setArrow(prev => !prev)
                        }}
                        
                        >
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117"
							fill="rgba(2, 6, 12, 0.92)"
							fillOpacity="0.92"></path>
                        
					</svg>
				</div>
				<div className="flex  bg-white px-5 py-4 rounded-xl flex-2 max-w-125 justify-between">
					<input
						className="w-[90%] outline-none"
						placeholder="Search for restaurants items and more"
						type="text"
						id="search"
					/>
					<img className="w-6 h-6 cursor-pointer" src={searchIcon} alt="" />
				</div>
			</div>
		</div>
	);
}
