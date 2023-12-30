import { useState } from "react";

export default function Button({
	backColor = "#FF1F00",
	textColor = "#FFF",
	children,
}) {
	const [isHovered, setIsHovered] = useState(false);

	const style = {
		padding: "0.6rem 5rem",
		fontSize: "24px",
		margin: "1rem",
		border: "2px solid #FF1F00",
		boxShadow: "none",
		borderRadius: "7px",
		color: isHovered ? backColor : textColor,
		backgroundColor: isHovered ? textColor : backColor,
		appearance: "none",
		outline: "none",
		transition: "all 0.2s ease-in-out",
	};

	function handleMouseEnter() {
		setIsHovered(true);
	}

	function handleMouseLeave() {
		setIsHovered(false);
	}

	return (
		<button
			style={style}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</button>
	);
}
