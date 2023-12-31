import { useState } from "react";
import Button from "../Components/Button/Button";
import "./AddComment.css";

export default function AddComment() {
	const [comment, setComment] = useState("");

	return (
		<aside className="add-comment">
			<h2>Comment</h2>
			<textarea
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				className="comment-box"
				rows="10"
				cols="35"
			></textarea>
			<Button textColor="#FF1F00" backColor="#FFF">
				Comment
			</Button>
		</aside>
	);
}
