import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { DarkProvider } from "./context/darkContext";
import { FormProvider } from "./context/formContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DarkProvider>
			<FormProvider>
				<App />
			</FormProvider>
		</DarkProvider>
	</React.StrictMode>
);
