import Header from "./Header";
import HeroSection from "./Hero-section";
import FoodOptions from "./FoodOptions";
import Groceries from "./Groceries";
import RestaurantsOnDineout from "./RestaurantsOnDineout";
import CitiesWithFoodDelivery from "./CitiesWithFoodDelivery";
import Footer from "./Footer";


export default function HomeScreen(){
    return(
        <div className="bg-[#ff5200] min-w-250 h-screen scroll-smooth scrollbar-none">
        <Header />
			<HeroSection />
			<FoodOptions />
			<Groceries />
			<RestaurantsOnDineout />
			<div className="mt-15 w-70/100 mx-auto">
				<img
					src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
					alt=""
				/>
			</div>
            <CitiesWithFoodDelivery/>
			<div className="bg-[#f1eff5]">
				<Footer/>
			</div>
        </div>
    )
}