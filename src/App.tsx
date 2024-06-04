import { Suspense, useEffect, useState } from 'react';
import styles from './App.module.css';
import SearchField from './components/SearchField/SaerchField';
import { Outlet, useNavigate } from 'react-router-dom';
import { searchForShows } from './services/TvMaze.service';
import { Show } from './models/Show';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
	const navigate = useNavigate();
	const [searchFieldTouched, setSearchFieldTouched] = useState(false);
	const [searchResultVisible, setSearchResultsVisible] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [shows, setShows] = useState<Show[]>([]);

	const handleOnSearchBlur = () => {
		const closeTimeout = setTimeout(() => {
			setSearchResultsVisible(false);
			clearTimeout(closeTimeout);
		}, 100);
	};

	const handleOnSearchChange = (text: string) => {
		setSearchTerm(text);
	};

	const handleOnShowClick = (show: Show) => {
		navigate(`/show/${show.id}`);
	};

	useEffect(() => {
		// Using timeout here to prevent too many requests to the API
		const searchTimeout = setTimeout(async () => {
			if (searchTerm.length > 2) {
				const res = await searchForShows(searchTerm);
				setShows(res);
				setSearchFieldTouched(true);
			}
		}, 500);

		return () => clearTimeout(searchTimeout);
	}, [searchTerm]);

	return (
		<div className={styles.container}>
			<div className={styles['page-search']}>
				<SearchField
					onSearchBlur={handleOnSearchBlur}
					onSearchFocus={() => setSearchResultsVisible(true)}
					onSearchChange={handleOnSearchChange}
				/>
				{searchResultVisible && (
					<div className={styles['search-result']}>
						<SearchResult
							onShowClick={handleOnShowClick}
							showEmptyContainer={searchFieldTouched}
							shows={shows}
						/>
					</div>
				)}
			</div>
			<div className={styles['page-content']}>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
}

export default App;
