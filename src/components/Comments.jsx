import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const Comments = (props) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		setComments(props.comments);
	}, [comments]);
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment
						key={comment.id}
						avatar={comment.user.image.png}
						name={comment.user.username}
						content={comment.content}
						createdAt={comment.createdAt}
						score={comment.score}
						replies={comment.replies}
					/>
				);
			})}
		</div>
	);
};

export default Comments;
