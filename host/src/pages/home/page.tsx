import { useState } from 'react';
import { Link } from 'react-router-dom';

type Board = {
	id: string;
	title: string;
};

export const Page = () => {
	const [boards, setBoards] = useState<Board[]>([]);

	return (
		<>
			<h1>Home</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.currentTarget);
					const title = formData.get('title') as string;
					console.log(formData);
					setBoards([...boards, { id: crypto.randomUUID(), title: title }]);
				}}
			>
				<input name="title" placeholder="Title" type="text" />
				<button type="submit">Create Board</button>
			</form>

			<div>
				{boards.map((board) => (
					<Link to={`board/${board.id}`} key={board.id}>
						{board.title}
					</Link>
				))}
			</div>
		</>
	);
};
