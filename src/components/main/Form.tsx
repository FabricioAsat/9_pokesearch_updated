import { FormEvent, useEffect, useState } from "react";
import { useIsDarkContext } from "../../context/darkContext";
import { useFormContext } from "../../context/formContext";

export const Form = () => {
	const [matchesAux, setMatchesAux] = useState<Array<{ name: string; url: string }>>([]);
	const { isDarkMode } = useIsDarkContext();
	const {
		allPokemons: { data, isPending, error },
		inputValue,
		changeInputValue,
		changePokeMatches,
	} = useFormContext();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		changePokeMatches(matchesAux);
		changeInputValue("");
	}

	// * Define pokematches - full name
	function handleMatchesSubmit(value: string) {
		const matches: Array<{ name: string; url: string }> = [];
		data?.results.forEach((p) => {
			let name = p.name.replaceAll("-", " ");
			if (name.toLowerCase().match(value.trim().toLowerCase())) matches.push({ name, url: p.url });
		});
		changePokeMatches(matches);
		changeInputValue("");
	}

	// * Define pokematches
	useEffect(() => {
		if (isPending || inputValue.trim().length === 0) return;

		const matches: Array<{ name: string; url: string }> = [];
		data?.results.forEach((p) => {
			let name = p.name.replaceAll("-", " ");
			if (name.toLowerCase().match(inputValue.trim().toLowerCase()))
				matches.push({ name, url: p.url });
		});
		setMatchesAux(matches);
	}, [inputValue]);

	// * HTML ----------
	return (
		<aside className="relative max-w-lg w-full mx-auto">
			<form
				className="flex w-full"
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<input
					type="text"
					maxLength={50}
					value={inputValue}
					disabled={isPending || !!error}
					onChange={(e) => {
						changeInputValue(e.target.value);
					}}
					placeholder={`${!!error ? "Error" : isPending ? "Loading..." : "Pokémon name"}`}
					className={`bg-inherit outline-none border rounded-l-sm px-4 py-1 w-full placeholder:italic font-semibold ${
						isDarkMode
							? "border-gray-400/10 focus:border-blue-500/30"
							: "border-gray-900/30 focus:border-blue-500/50"
					}`}
				/>
				<input
					type="submit"
					value={`${!!error ? "Error" : isPending ? "Wait..." : "Search"}`}
					disabled={inputValue.length === 0 || !!error}
					className={`py-1 px-3 border font-bold italic disabled:opacity-50 transition-all duration-300 ease-in hover:cursor-pointer disabled:cursor-default ${
						isDarkMode
							? "bg-gray-300/10 hover:bg-gray-300/20 active:bg-gray-400/30 border-gray-300/10 active:border-gray-400/20"
							: "bg-gray-900/30 hover:bg-gray-900/40 active:bg-gray-900/50 border-gray-900/30 active:border-gray-900/50"
					}`}
				/>
			</form>

			{!!inputValue && matchesAux.length > 0 && (
				<span
					className={`absolute z-10 flex flex-col w-full gap-y-1 rounded-b-md ${
						isDarkMode ? "bg-darkDark" : "bg-gray-400"
					}`}>
					{matchesAux.slice(0, 10).map((match) => (
						<button
							onClick={() => {
								handleMatchesSubmit(match.name);
							}}
							className="capitalize italic font-bold text-left px-4 py-1 outline-none hover:bg-blue-500/20"
							key={match.url}>
							{match.name}
						</button>
					))}
				</span>
			)}
		</aside>
	);
};
