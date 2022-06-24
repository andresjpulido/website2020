import React, { useState } from "react";
import "./navbutton.css";
import AppContext from "../../AppContext";

export default function NavButton() {
	  
	//dark light
	const { style, setStyle } = React.useContext(AppContext);

	const changeStyle = () => {
		 
		if (style==="light") {
			setStyle("dark");
			//document.body.style.backgroundColor = "blue";
			document.body.classList.remove("light");
			document.body.classList.add("dark");
		} else {
			setStyle("light");
			document.body.classList.remove("dark");
			document.body.classList.add("light");
		} 
	};

	return (
		<div className={"nav-button nav-button-" + style} onClick={changeStyle}>
			<div className={"nav-button-circle nav-button-circle-" + style}></div>
		</div>
	);
}
