import { useIsDarkContext } from "../../context/darkContext";

import darkButton from "../../assets/turnOn.svg";
import ligthButton from "../../assets/turnOff.svg";

export const ThemeButton = () => {
	const { isDarkMode, changeTheme } = useIsDarkContext();

	return (
		<button className={`w-6 md:w-7 xl:w-8 select-none`} onClick={() => changeTheme()}>
			{isDarkMode && <img src={darkButton} />}
			{!isDarkMode && <img src={ligthButton} />}
		</button>
	);
};
