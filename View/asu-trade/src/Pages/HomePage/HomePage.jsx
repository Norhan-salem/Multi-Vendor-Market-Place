import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Footer from "../../Components/Footer/Footer";
import HomeMain from "../../Components/HomeMain/HomeMain";
import "./HomePage.css";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<div className="home-page">
				<HomeHeader />
				<HomeMain />
			</div>
			<Footer />
		</>
	);
}
