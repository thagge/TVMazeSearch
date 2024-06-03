import { Image } from './Image';
import { Country } from './Show';

export type Season = {
	id: number;
	url: string;
	episodeOrder: number;
	number: number;
	name: string;
	premiereDate: string;
	endDate: string;
	network: {
		id: number;
		name: string;
		country: Country;
		officialSite: string;
	};
	webChannel: string;
	image: Image;
	summary: string;
};
