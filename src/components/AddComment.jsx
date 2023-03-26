import React, { useEffect, useState } from 'react';

const AddComment = (props) => {
	const handleChange = (e) => {
		setContent(e.target.value);
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
					value=''
					onChange={handleChange}
				></textarea>
			</form>
			<button className='ml-4 bg-moderate_blue px-8 uppercase text-white font-medium py-2 rounded-lg'>
				send
			</button>
		</div>
	);
};

export default AddComment;
