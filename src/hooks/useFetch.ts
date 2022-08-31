import { useEffect, useState } from "react";

export function useFetch(url: string) {
	const [data, setData] = useState<any>(null);
	const [isPending, setIsPending] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		setData(null);
		setIsPending(true);
		setError(null);
		async function getData() {
			try {
				const res = await fetch(url);

				if (!res.ok) throw { status: res.status, statusText: res.statusText };

				const dataFetching = await res.json();

				setTimeout(() => {
					setData(dataFetching);
					setIsPending(false);
					setError(null);
				}, 250);
			} catch (error) {
				setData(null);
				setIsPending(true);
				setError(error);
			}
		}
		getData();
	}, [url]);

	return { data, isPending, error };
}
