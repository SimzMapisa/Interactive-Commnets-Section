import React from 'react';

const CommentCard = ({ name, createdAt, content, score, avatar }) => {
	return (
		<div>
			<div className='bg-white p-4 flex font-rubik relative rounded-lg mb-4'>
				{/* scores  */}
				<div className='bg-very_light_gray w-fit h-32 py-4 px-2 flex flex-col items-center rounded-lg'>
					<span className='pb-2 text-base font-bold text-light_grayish_blue'>
						+
					</span>
					<span className='text-moderate_blue font-bold'>{score}</span>
					<span className='pt-2 font-bold text-light_grayish_blue'>-</span>
				</div>

				{/* Content wrapper */}
				<div className='ml-4 w-full'>
					<div className='flex items-center justify-between w-full'>
						<span className='flex items-center'>
							<div className='w-12 h-12 mr-4 overflow-hidden rounded-full'>
								<img className='inline-block' src={avatar} alt='' />
							</div>
							<p className='font-bold mr-4 text-dark_blue'>{name}</p>
							<p className='text-grayish_blue'>{createdAt}</p>
						</span>
						<button className='flex items-center justify-end'>
							<span className='mr-2'>
								<img src='/public/images/icon-reply.svg' alt='reply icon' />
							</span>
							<p className='font-medium text-moderate_blue'>Reply</p>
						</button>
					</div>
					<div className='mt-4'>
						<p className='text-grayish_blue'>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentCard;
