import { Cast } from './Cast';
import { EmbeddedImage, Image } from './Image';
import { Season } from './Season';

export type Show = {
	averageRuntime: number;
	dvdCountry: string;
	ended: string;
	externals: ShowExternal;
	genres: string[];
	id: number;
	image: Image;
	language: string;
	name: string;
	network: ShowNetwork;
	officialSite: string;
	premiered: string;
	rating: ShowRating;
	runtime: number;
	schedule: ShowSchedule;
	status: string;
	summary: string;
	type: string;
	updated: number;
	url: string;
	webChannel: string;
	weight: number;
};

export type Country = {
	code: string;
	name: string;
	timezone: string;
};

export type ShowExternal = {
	imdb: string;
	thetvdb: number;
	tvrage: number;
};

export type ShowNetwork = {
	country: Country;
	id: number;
	name: string;
	officialSite: string;
};
export type ShowRating = {
	average: number;
};

export type ShowSchedule = {
	days: string[];
	time: string;
};

export type ShowWithCast = Show & {
	_embedded: { cast: Cast[] };
};

export type ShowWithImages = Show & {
	_embedded: { images: EmbeddedImage[] };
};

export type ShowWithSeasons = Show & {
	_embedded: { seasons: Season[] };
};
