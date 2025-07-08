declare module 'board/page' {
	export const Board: () => JSX.Element;
}

// /* WARNING: Так можно делать только в host приложении
//  тк оно грузится в runtime, а остальные lazy */
// declare global {
// 	interface Window {
// 		context: GlobalContext;
// 	}
// }
