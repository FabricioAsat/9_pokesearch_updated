/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkLight: "#16191b",
				darkDark: "#07090c",
				lightDark: "#dcdcdc",
				lightLight: "#f9f8fd",
			},
			gridTemplateColumns: {
				gridCardsMobile: "repeat(auto-fill, minmax(112px, 1fr))",
				gridCardsDesktop: "repeat(auto-fill, minmax(160px, 1fr))",
			},
		},
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui"],
			serif: ["ui-serif", "Georgia"],
			mono: ["ui-monospace", "SFMono-Regular"],
			body: ["Nunito", "sans-serif"],
		},
	},
	plugins: [],
};
