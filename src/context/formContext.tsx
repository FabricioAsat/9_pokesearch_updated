import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const formContext = createContext({
	inputValue: "",
	changeInputValue: (value: string) => {},
	allPokemons: {
		data: { results: [{ name: "", url: "" }] },
		isPending: true,
		error: { status: "", statusText: "" },
	},
	pokeMatches: [{ name: "", url: "" }],
	changePokeMatches: (matches: Array<{ name: string; url: string }>) => {},
});

export function FormProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
	const [pokeMatches, setpokeMatches] = useState<Array<{ name: string; url: string }>>([]);
	const [inputValue, setInputValue] = useState("");
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

	const allPokemons: any = useFetch(url);

	function handleChange(value: string) {
		setInputValue(value);
	}

	function handlePokeMatches(matches: Array<{ name: string; url: string }>) {
		setpokeMatches(matches);
	}

	useEffect(() => {
		if (allPokemons.isPending) return;
		setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${allPokemons.data.count}`);
	}, [allPokemons.data, url]);

	return (
		<formContext.Provider
			value={{
				inputValue,
				changeInputValue: handleChange,
				allPokemons,
				pokeMatches,
				changePokeMatches: handlePokeMatches,
			}}>
			{children}
		</formContext.Provider>
	);
}

export function useFormContext() {
	return useContext(formContext);
}
