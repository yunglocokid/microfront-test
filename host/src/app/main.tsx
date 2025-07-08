import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

/* WARNING: Так можно делать только в host приложении
 тк оно грузится в runtime, а остальные lazy */
// window.context = {
// 	store: store,
// };

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
