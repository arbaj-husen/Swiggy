
export default function RestaurantTop({link,image}:{link:string,image:string}){

    return(
        <a href={link} className="w-fit h-fit">
            <img className="w-36 h-45 min-w-36 min-h-45 object-contain" src={image} alt="" />
        </a>
    )
}