import { Show, ShowWithCast, ShowWithImages } from '../models/Show';

type SearchShowsResult = {
	score: number;
	show: Show;
};

export const searchForShows = async (searchTerm: string) => {
	const response = await fetch(
		`https://api.tvmaze.com/search/shows?q=${searchTerm}`
	);
	const data = (await response.json()) as SearchShowsResult[];
	return data.map((result) => result.show);
};

export const lookUpShow = async (showId: number) => {
	const response = await fetch(
		`https://api.tvmaze.com/shows/${showId}?embed[]=cast&embed[]=images&embed[]=seasons`
	);
	const show = (await response.json()) as ShowWithCast &
		ShowWithImages &
		ShowWithImages;

	const removeHtmlTagsRegex = /(<([^>]+)>)/gi;

	show.summary = show.summary.replace(removeHtmlTagsRegex, '');

	return show;
};
