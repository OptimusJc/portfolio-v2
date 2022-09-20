import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/main.scss";

import Hero from "../components/Hero";

import Layout from "../components/Layouts.js";

const IndexPage = () => {
	return (
		<div>
			<Layout>
				<Hero />
			</Layout>
		</div>
	);
};

export default IndexPage;

export const Head = () => {
	return (
		<>
			<title>Joseph's Portfolio</title>
		</>
	);
};
