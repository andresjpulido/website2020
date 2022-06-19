import React, { useState } from "react";
import AppContext from "../../AppContext";
import "./bio.css";

export default function Bio() {
	const { style, setStyle } = React.useContext(AppContext);

	return <div className={"bio bio-" + style}>bio</div>;
}
