import { Layout } from "./components/layout/Layout";
import { Container } from "./components/main/Container";
import { Form } from "./components/main/Form";

function App() {
	return (
		<Layout>
			<Form />
			<Container />
		</Layout>
	);
}

export default App;
