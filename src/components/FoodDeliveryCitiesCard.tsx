export default function FoodDeliveryCitiesCard({link,text}:{
    link:string;
    text:string;
}){

    return(
        <a href={link} className="w-[cal(25%-32px)] border border-gray-400 p-3 rounded-lg h-full">
            <div className="text-sm text-center">{text}</div>
        </a>
    )
}