import { useLoaderData } from 'react-router-dom';
import {
	ShowWithCast,
	ShowWithImages,
	ShowWithSeasons,
} from '../../models/Show';
import styles from './SearchDetail.module.css';
import Badge from '../../components/Badge/Badge';
import ShowImages from '../../components/ShowImages/ShowImages';
import ExternalLinks from '../../components/ExternalLinks/ExternalLinks';
import SeasonSummary from '../../components/SeasonSummary/SeasonSummary';

const SearchDetail = () => {
	const show = useLoaderData() as ShowWithCast &
		ShowWithImages &
		ShowWithSeasons;
	return (
		<div className={styles.container}>
			<div className={styles['title-container']}>
				<h1>{show.name}</h1>
				{show.rating?.average && (
					<span className={styles.rating}>{show.rating?.average}★</span>
				)}
			</div>
			<small>
				{show.premiered?.substring(0, 4)}-{show.ended?.substring(0, 4)}
			</small>
			<p>
				{show.genres.map((g) => (
					<Badge key={g} className={styles['genre-badge']}>
						{g}
					</Badge>
				))}
			</p>
			<ShowImages images={show._embedded.images} />
			<div className={styles.content}>
				<div className={styles['right-content']}>
					<p>{show.summary}</p>
					{show._embedded.cast.length > 0 && (
						<>
							<hr />
							<div className={styles['cast-container']}>
								<div>Cast</div>
								<div className={styles['cast-badges']}>
									{show._embedded.cast.slice(0, 4).map((c, i) => (
										<Badge key={i} className={styles['cast-badge']}>
											{c.person.name}
										</Badge>
									))}
								</div>
							</div>
						</>
					)}
					{show.network && (
						<>
							<hr />
							Network{' '}
							<a href={show.network?.officialSite} target='_blank'>
								{show.network?.name}
							</a>
						</>
					)}
					<hr />
					<div>Average runtime {show.averageRuntime}</div>
					<hr />
					<SeasonSummary seasons={show._embedded.seasons} />
					<hr />
					<p>
						External links
						<ExternalLinks show={show} />
					</p>
				</div>
			</div>
		</div>
	);
};

export default SearchDetail;
