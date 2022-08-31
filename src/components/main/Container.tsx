import { useEffect, useState } from "react";
import { useFormContext } from "../../context/formContext";
import { Card } from "./Card";

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export const Container = () => {
	const [value, setValue] = useState(0);
	const { pokeMatches } = useFormContext();

	function handlePreviousPokemons() {
		if (value < 0 || value - 18 < 0) return;
		setValue(value - 18);
	}

	function handleNextPokemons() {
		if (value >= pokeMatches.length || value + 18 >= pokeMatches.length) return;
		setValue(value + 18);
	}

	useEffect(() => {
		setValue(0);
	}, [pokeMatches]);

	if (pokeMatches.length === 0)
		return (
			<span>
				<h1 className="longSize text-center font-bold">
					There is <b className="text-blue-500 font-bold">no</b> matches
				</h1>
				<p className="italic shortSize text-center font-bold">Do a new search</p>
			</span>
		);

	return (
		<div className="flex flex-col gap-y-4 items-center">
			{pokeMatches.length === 1 ? (
				<h1 className="lowLongSize font-bold text-center">
					There is <b className="font-bold text-blue-500">1</b> match
				</h1>
			) : (
				<h1 className="lowLongSize font-bold text-center">
					There are <b className="font-bold text-blue-500">{pokeMatches.length}</b> matches
				</h1>
			)}

			<span className={`flex gap-x-5 md:gap-x-8 lg:gap-x-11`}>
				<button
					onClick={handlePreviousPokemons}
					disabled={value < 0 || value - 18 < 0}
					className={`lowLongSize px-4 md:px-6 lg:gap-x-8 py-1 rounded-l-full hover:scale-105 transition-transform duration-200 bg-blue-400 disabled:opacity-50`}>
					<GrFormPreviousLink />
				</button>
				<button
					onClick={handleNextPokemons}
					disabled={value >= pokeMatches.length || value + 18 >= pokeMatches.length}
					className={`lowLongSize px-4 md:px-6 lg:gap-x-8 py-1 rounded-r-full hover:scale-105 transition-transform duration-200 bg-blue-400 disabled:opacity-50`}>
					<GrFormNextLink />
				</button>
			</span>
			<section className="w-full grid justify-items-center gap-x-4 md:gap-x-6 px-4 md:px-6 gap-y-5 md:gap-y-8 grid-cols-gridCardsMobile md:grid-cols-gridCardsDesktop">
				{pokeMatches.slice(value, value + 18).map((match) => (
					<Card url={match.url} />
				))}
			</section>
		</div>
	);
};
