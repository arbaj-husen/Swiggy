import FooterItems from "./FooterItems";

export default function FooterList({text,items}:{
    text:string,
    items:string[]
}) {
	return (
		<div>
			<div className="font-semibold text-lg font-gilroy">{text}</div>
			<div className="flex flex-col gap-3 mt-3 font-gilroy font-medium">
				{items.map((item) => (
					<FooterItems text={item} key={item}/>
				))}
			</div>
		</div>
	);
}
