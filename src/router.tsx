import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { lookUpShow } from './services/TvMaze.service';
import FindShowError from './components/FindShowError/FindShowError';
import NotFoundError from './views/NotFoundError/NotFoundError';

const App = lazy(() => import('./App'));
const Home = lazy(() => import('./views/Home/Home'));
const SearchDetail = lazy(() => import('./views/SearchDetail/SearchDetail'));

export const router = createBrowserRouter([
	{
		element: <App />,
		errorElement: <NotFoundError />,
		path: '/',
		children: [
			{
				element: <Home />,
				path: '/',
			},
			{
				errorElement: <FindShowError />,
				element: <SearchDetail />,
				path: '/show/:id',
				loader: async ({ params }) => {
					return lookUpShow(parseInt(params.id!));
				},
			},
		],
	},
]);

// createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path='/'>
// 			<Route element={<App />}>
// 				<Route path='/' element={<Home />} />
// 				<Route
// 					path='/show/:id'
// 					element={<SearchDetail />}
// 					loader={(params) => {}}
// 				/>
// 			</Route>
// 		</Route>
// 	)
// );
