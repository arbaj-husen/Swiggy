
export default function GroceriesCard({image,link,name}:{image:string,link:string,name:string}){
    return (
        <div className="w-fit flex flex-col items-center">
            <a href={link}>
                <img
                className="w-36 min-w-36 h-45 min-h-45 rounded-md"
                 src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image}`} alt="groceries image" />
            </a>
            <div className="w-7/10 text-center font-bold text-gray-600">{name}</div>
        </div>
    )
}