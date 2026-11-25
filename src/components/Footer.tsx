import FooterItems from "./FooterItems";
import FooterList from "./FooterList";

const company = [
	"About Us",
	"Swiggy Corporate",
	"Careers",
	"Team",
	"Swiggy One",
	"Swiggy Instamart",
];
const contactUs = ["Help & Support", "Partner With Us", "Ride With Us"];
const legal = ["Terms & Condition", "Cookies Policy", "Privacy Policy"];
const availableIn = [
	"bangalore",
	"gurgaon",
	"hyderabad",
	"delhi",
	"mumbai",
	"pune",
];
const lifeAtSwiggy = ["Explore with Swiggy", "Swiggy News", "Snackables"];

export default function Footer() {
	return (
		<div>
			<div className="w-70/100 flex justify-around mx-auto py-15">
				<div className="mr-15">
					<img
						src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
						alt="swiggy logo"
					/>
					<div>© 2026 Swiggy Limited</div>
				</div>
				<FooterList text="Company" items={company} />
				<div>
					<FooterList text="Contact Us" items={contactUs} />
					<div className="mt-13">
						<FooterList text="Legal" items={legal} />
					</div>
				</div>
				<div>
					<FooterList text="Available in" items={availableIn} />
					<div className="flex items-center gap-6 border w-fit py-0.5 px-1 justify-center rounded-md font-gilroy mt-3 cursor-pointer">
						685 cities
						<svg
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							aria-hidden="true">
							<path
								d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402s.789-.223.992-.402a5.4 5.4 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106"
								fill="#000"
								fillOpacity="0.92"></path>
						</svg>
					</div>
				</div>
				<div>
					<FooterList text="Life at Swiggy" items={lifeAtSwiggy} />
					<div>
						<div className="font-semibold text-lg font-gilroy mt-15">
							Social Links
						</div>
						<div className="flex gap-4 mt-3">
							<img
								src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"
								alt="Linkedin"
							/>
							<img
								src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"
								alt="Instagram"
							/>
							<img
								src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"
								alt="Facebook"
							/>
							<img
								src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"
								alt="Pinterest"
							/>
							<img
								src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"
								alt="Twitter"
							/>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="border border-gray-400 w-90/100 mx-auto"></div>
				<div className="flex items-center justify-center gap-5 py-8">
					<div className="text-2xl font-semibold font-gilroy">
						For better experience, download the Swiggy app now
					</div>
					<img
						src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
						alt="App Store"
					/>
					<img
						src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
						alt="Play Store"
					/>
				</div>
			</div>
		</div>
	);
}
