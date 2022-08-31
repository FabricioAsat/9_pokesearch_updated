import { useEffect, useState } from "react";
import { useIsDarkContext } from "../../context/darkContext";
import { useFetch } from "../../hooks/useFetch";

import notFound from "../../assets/logo.png";

export const Card = ({ url }: { url: string }) => {
	const [info, setInfo] = useState({ name: "", img: "", types: "" });

	//
	const { data, isPending, error } = useFetch(url);
	const { isDarkMode } = useIsDarkContext();

	// * get all necesary info
	useEffect(() => {
		if (isPending) return;

		const name = data.name.replaceAll("-", " ");
		const img = data.sprites.front_default || notFound;
		let types = "";

		data.types.forEach(({ type }: any) => {
			types += type.name + " ";
		});
		types = types.trim().replaceAll(" ", " - ");

		setInfo({ name, img, types });
	}, [data]);

	if (error)
		return (
			<div
				className={`flex flex-col items-center justify-center w-28 h-40 md:w-40 md:h-60 text-center rounded-lg ${
					isDarkMode ? "bg-lightLight/10" : "bg-darkDark/10"
				}`}>
				<h1 className="lowMediumSize font-bold text-red-400">Error 404</h1>
				<small className="italic font-semibold tonySize">Not found</small>
			</div>
		);

	if (isPending)
		return (
			<div
				className={`flex flex-col items-center justify-center w-28 h-40 md:w-40 md:h-60 rounded-lg ${
					isDarkMode ? "bg-lightLight/10" : "bg-darkDark/10"
				}`}>
				<span className="border-4 border-t-blue-400 rounded-full w-10 h-10 animate-spin"></span>
			</div>
		);

	return (
		<>
			<div
				className={`grid grid-rows-3 justify-items-center w-28 h-40 md:w-40 md:h-60 rounded-lg select-none hover:scale-105 transition-all duration-300 hover:shadow-md ${
					isDarkMode
						? "bg-lightLight/10 hover:shadow-darkDark/80"
						: "bg-darkDark/10 hover:shadow-lightDark/80"
				}`}>
				<picture className="row-span-2 my-auto w-full">
					<img src={info.img} alt={info.name} className="w-3/4 object-cover mx-auto" />
				</picture>
				<span className="w-24 md:w-36 text-center">
					<h2 className="capitalize lowShortSize font-bold truncate text-blue-400">{info.name}</h2>
					<small className="capitalize tinySize italic font-semibold truncate">{info.types}</small>
				</span>
			</div>
		</>
	);
};
