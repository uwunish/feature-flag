import React, { createContext, useState, useEffect } from "react";
import featureFlagsService from "./data";

export const FeatureFlagsContext = createContext(null);

export function FeatureFlagsProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [enabledFlags, setEnabledFlags] = useState({});

	function fetchFeatureFlags() {
		setLoading(true);
		featureFlagsService()
			.then((response) => {
				setEnabledFlags(response);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		fetchFeatureFlags();
	}, []);

	return (
		<FeatureFlagsContext.Provider value={(loading, enabledFlags)}>
			{children}
		</FeatureFlagsContext.Provider>
	);
}
