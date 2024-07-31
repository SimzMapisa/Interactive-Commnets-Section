import Comments from './components/Comments';
import data from '../data.json';
import AddComment from './components/AddComment';
import { useState } from 'react';

function App() {
	const { comments, currentUser } = data;
	const [allComments, setComments] = useState(data.comments);
	return (
		<main className='max-w-2xl mx-auto mt-4 relative'>
			<Comments comments={allComments} />
			<AddComment
				currentUser={currentUser}
				comments={allComments}
				setComments={setComments}
			/>
		</main>
	);
}
export default App;
