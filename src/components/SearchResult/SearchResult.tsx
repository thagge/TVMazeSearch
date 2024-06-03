import { Show } from '../../models/Show';
import Badge from '../Badge/Badge';
import Image from './../Image/Image';
import styles from './SearchResult.module.css';
type SearchResultProps = {
	onShowClick: (show: Show) => void;
	showEmptyContainer?: boolean;
	shows: Show[];
};

const SearchResult = ({
	onShowClick,
	showEmptyContainer = true,
	shows,
}: SearchResultProps) => {
	if (shows.length === 0 && showEmptyContainer)
		return (
			<div className={styles['empty-result']}>
				No results found for the given search term
			</div>
		);

	const handleOnClick = (show: Show) => {
		onShowClick(show);
	};

	const showList = shows.map((show) => (
		<li key={show.id} onClick={() => handleOnClick(show)}>
			<div>
				<Image src={show.image?.medium} />
			</div>
			<div className={styles.content}>
				<div className={styles.header}>
					<h3>{show.name}</h3>

					<Badge>{show.status}</Badge>
				</div>
				<p>{show.premiered?.substring(0, 4)}</p>
				<p>
					{show.genres.map((g) => (
						<Badge key={g} className={styles['genre-badge']}>
							{g}
						</Badge>
					))}
				</p>
			</div>
		</li>
	));

	return shows.length > 0 && <ul className={styles.container}>{showList}</ul>;
};

export default SearchResult;
