import React from "react";

const AppContext = React.createContext({
	style: "dark",
	setStyle: (t) => {},
});

export default AppContext;
