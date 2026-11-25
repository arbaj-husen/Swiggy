export default function Header() {
	return (
		<div className="w-[80%] mx-auto flex justify-between items-center py-8">
			<img
				className="w-40 h-12 cursor-pointer"
				src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
				alt="swiggy logo"
			/>

			<div className="text-white  flex items-center gap-8 font-gilroy font-bold">
				<p className="cursor-pointer">Swiggy Corporate</p>
				<p className="cursor-pointer">Partner with us</p>
				<button className="cursor-pointer flex items-center gap-1 border border-white px-4 py-3 rounded-xl">
					<span>Get the App</span>
					<svg
						className="-rotate-45"
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						aria-label="rating-up-down-icon"
						aria-hidden={false}>
						<path
							d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z"
							fill="#FFFFFF"
							fillOpacity={0.92}
						/>
					</svg>
				</button>
				<button className="cursor-pointer bg-black px-10 py-4 rounded-2xl">
					Sign in
				</button>
			</div>
		</div>
	);
}
