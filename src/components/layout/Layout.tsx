import { useIsDarkContext } from "../../context/darkContext";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const { isDarkMode } = useIsDarkContext();

	return (
		<div
			className={`transition-colors duration-200 ease-in w-full ${
				isDarkMode ? "bg-darkLight text-lightLight" : "bg-lightLight text-darkLight"
			}`}>
			<Header />
			<main
				className={`flex flex-col gap-y-5 max-w-7xl mx-auto min-h-screen h-full pt-4 px-1 md:px-4`}>
				{children}
			</main>
			<Footer />
		</div>
	);
};
