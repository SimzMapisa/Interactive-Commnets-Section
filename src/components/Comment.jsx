import React from 'react';
import CommentCard from './CommentCard';

const Comment = (props) => {
	return (
		// Main Component
		<div className='wrapper'>
			<CommentCard
				name={props.name}
				avatar={props.avatar}
				createdAt={props.createdAt}
				content={props.content}
				score={props.score}
			/>
			<div className='ml-4 border-l-2 border-light_gray pl-8'>
				{props.replies.length > 0
					? props.replies.map((reply) => {
							return (
								<CommentCard
									key={reply.id}
									avatar={reply.user.image.png}
									name={reply.user.username}
									content={reply.content}
									createdAt={reply.createdAt}
									score={reply.score}
								/>
							);
					  })
					: ''}
			</div>
		</div>
	);
};

export default Comment;
