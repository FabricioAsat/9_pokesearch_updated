import image from "../../assets/logo.png";

export const Logo = () => {
	return (
		<picture>
			<small className="text-blue-500 longSize font-bold flex items-center">
				P
				<img src={image} alt="Logo" className="h-6 md:h-8 xl:h-11" />
				keSearch
			</small>
		</picture>
	);
};
