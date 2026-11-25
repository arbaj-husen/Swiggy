
export default function Dropdown(){
    return(
        <div className="flex flex-col w-60 text-sm bg-white px-8 py-4 gap-2 rounded-2xl">
            <div className="flex items-center justify-between">
                <label htmlFor="relevance">Relevance <span>(Default)</span>
                <input type="radio" name="relevance" id="relevance" />
                </label>
            </div>
            <div className="flex items-center">
                <label htmlFor="deliverytime">
                    Delivery Time
                <input type="radio" name="deliverytime" id="deliverytime" />
                </label>
            </div>
            <div className="flex items-center">
                <label htmlFor="rating">
                    Rating
                <input type="radio" name="rating" id="rating" />
                </label>
            </div>
            <div className="flex items-center">
                <label htmlFor="lowtohigh">
                    Cost: Low to High 
                <input type="radio" name="lowtohigh" id="lowtohigh" />
                </label>
            </div>
            <div className="flex items-center">
                <label htmlFor="hightolow">
                    Cost: High to Low
                <input type="radio" name="hightolow" id="hightolow" />
                </label>
            </div>
            <div className="border"></div>
            <div className="font-bold text-center text-orange-500">Apply</div>
        </div>
        
    )
}