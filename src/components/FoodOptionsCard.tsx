export default function FoodOptionsCard({link,image}:{link:string,image:string}){
    return (
        <a href={link}>
            <img className="rounded-xl w-36 h-45 min-w-36 min-h-45 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image}`} alt="Food Image" />
        </a>
    )
}