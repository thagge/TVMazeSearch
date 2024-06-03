import { Show } from '../../models/Show';
import styles from './ExternalLinks.module.css';
const IMDB_URL = 'https://www.imdb.com/title/';

type ExternalLinksProps = {
	show: Show;
};

const ExternalLinks = ({ show }: ExternalLinksProps) => {
	const links = [{ name: 'TV Maze', url: show.url }];
	if (show.externals.imdb)
		links.push({ name: 'IMDB', url: `${IMDB_URL}${show.externals.imdb}` });
	return (
		<span className={styles.links}>
			{links.map((l, i) => (
				<a key={i} href={l.url}>
					{l.name}
				</a>
			))}
		</span>
	);
};

export default ExternalLinks;
