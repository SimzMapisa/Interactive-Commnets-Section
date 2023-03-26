import Comments from './components/Comments';
import data from '../data.json';
import AddComment from './components/AddComment';

function App() {
	const { comments, currentUser } = data;
	return (
		<main className='max-w-2xl mx-auto mt-4 relative'>
			<Comments comments={comments} />
			<AddComment currentUser={currentUser} comments={comments} />
		</main>
	);
}
export default App;
