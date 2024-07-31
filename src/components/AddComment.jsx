import React, { useEffect, useState } from 'react';

const AddComment = (props) => {
	const [content, setContent] = useState('');

	const handleChange = (e) => {
		setContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Trim the content and check if it's empty
		const trimmedContent = content.trim();

		// if content is empty, clear the textre and return otherwise add the comment
		if (trimmedContent === '') {
			setContent('');
			return;
		}

		const newComment = {
			id: props.comments.length + 1,
			user: props.currentUser,
			content: content,
			createdAt: new Date().toISOString(),
			score: 0,
			replies: [],
		};

		props.setComments([...props.comments, newComment]);
		setContent('');
	};

	return (
		<div className='flex items-start px-8 py-4 bg-white rounded-lg mb-4'>
			<div className='mr-4 w-9 h-9'>
				<img src={props.currentUser.image.png} alt='' />
			</div>
			<form action='' className='flex-1'>
				<textarea
					className='border-2 border-light_gray w-full resize-none h-32 p-2 rounded-lg'
					placeholder='Add a comment'
					id=''
					value={content}
					onChange={handleChange}></textarea>
			</form>
			<button
				className='ml-4 bg-moderate_blue px-8 uppercase text-white font-medium py-2 rounded-lg'
				onClick={handleSubmit}>
				send
			</button>
		</div>
	);
};

export default AddComment;
