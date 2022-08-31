import logo from "../../assets/logo.png";
export const Footer = () => {
	return (
		<div className="flex gap-x-2 justify-center items-center w-full mt-5 py-2">
			<img src={logo} alt="logo" className="h-5 md:h-6" />
			<p className="tinySize italic font-bold text-center">
				Made with the <b className="text-red-500">pokeAPI</b>
			</p>
		</div>
	);
};
