import React, { useContext } from "react";
import { FeatureFlagsProvider } from "./context";
import { FeatureFlagsContext } from "./context";
import { App as LightDarkMode } from "../../../light-dark-mode";
import { App as TicTacToe } from "../../../tic-tac-toe";
import { App as RandomColor } from "../../../random-color-generator";
import { App as Accordion } from "../../../accordion";
import { App as TreeView } from "../../../tree-menu";

function App() {
	const { loading, enabledFlags } = useContext(FeatureFlagsContext);

	const componentsToRender = [
		{
			key: "showLightAndDarkMode",
			component: <LightDarkMode />,
		},
		{
			key: "showTicTacToe",
			component: <TicTacToe />,
		},
		{
			key: "showRandomColorGenerator",
			component: <RandomColor />,
		},
		{
			key: "showAccordion",
			component: <Accordion />,
		},
		{
			key: "showTreeView",
			component: <TreeView />,
		},
	];

	function checkEnabledFlags(getCurrentKey) {
		return enabledFlags[getCurrentKey];
	}

	if (loading) {
		return <h1>Loading... Please wait...</h1>;
	}
	return (
		<div>
			<h1>Feature Flags</h1>
			<FeatureFlagsProvider>
				{componentsToRender.map((componentItem) => {
					return checkEnabledFlags(componentItem.key)
						? componentItem.component
						: null;
				})}
			</FeatureFlagsProvider>
		</div>
	);
}

export default App;
