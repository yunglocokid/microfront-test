import type { BoardId } from '@vite-micro-front/contracts/kernel';
import { Link, useParams } from 'react-router-dom';

export const Board = () => {
	const params = useParams<{ boardId: BoardId }>();
	return (
		<>
			<div>Board {params.boardId}</div>
			<Link to="/">Back</Link>
		</>
	);
};
