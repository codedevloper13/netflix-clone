/** @format */

import React from "react";
import "./Banner.css";
const Banner = () => {
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}
	return (
		<header
			className='banner'
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("/background.jpg")`,
				backgroundPosition: "center center",
			}}>
			<div className='banner__contents'>
				<h1 className='banner__title'>Movie Name</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>
					{truncate(
						`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic`,
						150
					)}
				</h1>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
};

export default Banner;
