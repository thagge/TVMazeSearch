import { Season } from '../../models/Season';

type SeasonSummaryProps = {
	seasons: Season[];
};

const SeasonSummary = ({ seasons }: SeasonSummaryProps) => {
	const numberOfSeasons = seasons?.length || 1;
	const totalNumberOfEspisodes = seasons
		?.map((s) => s.episodeOrder)
		.reduce((a, b) => a + b, 0);
	return (
		<div>
			<h2>Seasons</h2>
			<p>No. seasons {seasons?.length}</p>
			<p>No. episodes {totalNumberOfEspisodes}</p>
			<p>
				Episodes per season{' '}
				{Math.round((totalNumberOfEspisodes / numberOfSeasons) * 10) / 10}
			</p>
		</div>
	);
};

export default SeasonSummary;
