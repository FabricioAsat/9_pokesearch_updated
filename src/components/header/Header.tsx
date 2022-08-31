import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";

export const Header = () => {
	return (
		<header className={`w-full bg-darkDark py-2 md:py-3 shadow-darkDark shadow-md select-none`}>
			<span className="flex gap-x-6 md:gap-x-10 justify-center max-w-sm mx-auto">
				<Logo />
				<ThemeButton />
			</span>
		</header>
	);
};
