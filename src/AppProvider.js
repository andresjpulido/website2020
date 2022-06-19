import React, { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider(props) {

    const [style, setStyle] = useState("dark");
 
    const value = {style, setStyle}
 
	return (
		<AppContext.Provider value={value}>
			{props.children}
		</AppContext.Provider>
	);
}
