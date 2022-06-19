import React, { useState } from "react";
import "./navbutton.css";
import AppContext from "../../AppContext";

export default function NavButton() {
	  
	//dark light
	const { style, setStyle } = React.useContext(AppContext);

	const changeStyle = () => {
		 
		if (style==="light") {
			setStyle("dark");
		} else {
			setStyle("light");
		} 
	};

	return (
		<div className={"nav-button nav-button-" + style} onClick={changeStyle}>
			<div className={"nav-button-circle nav-button-circle-" + style}></div>
		</div>
	);
}
