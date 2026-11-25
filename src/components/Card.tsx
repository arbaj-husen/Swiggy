import { Link } from "react-router";

export default function Card({ link, image }: { link: string; image: string }) {
	return (
		<Link to={link} className="rounded-2xl w-full h-full">
			<img src={image} alt={link} />
		</Link>
	);
}
