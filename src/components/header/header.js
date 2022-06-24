import React, { useState, useEffect, Fragment } from "react";
import AppContext from "../../AppContext";
import Nav from "../nav/nav";
import NavButton from "../navbutton/navbutton";
import "./header.css";

export default function Header() {
	const { style, setStyle } = React.useContext(AppContext);

	return (
		<header className="header-wrapper">
			<div className={"header header-" + style}>
				<Nav />
				<div className="i">
					<NavButton />
				</div>
			</div>
		</header>
	);
}
