import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./AppProvider";
import Home from "./views/home";
import Bio from "./views/bio";
import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";

function App() {
	return (
		<AppProvider>
			<div>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/home" element={<Home />} exact />
						<Route path="/bio" element={<Bio />} exact />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</AppProvider>
	);
}

export default App;
