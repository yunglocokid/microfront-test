import { createBrowserRouter } from 'react-router-dom';
import App from './app';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				lazy: async () => {
					const module = await import('../pages/home');
					return {
						Component: module.Page,
					};
				},
			},
			{
				path: '/board/:boardId',
				lazy: async () => {
					const module = await import('board/page');
					return {
						Component: module.Board,
					};
				},
			},
		],
	},
]);
