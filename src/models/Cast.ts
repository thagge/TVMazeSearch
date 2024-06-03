import { Country } from './Show';
import { Image } from './Image';

export type Cast = {
	person: CastPerson;
	Character: CastCharacter;
	self: boolean;
	voice: boolean;
};

export type CastCharacter = {
	id: number;
	url: string;
	name: string;
	image: Image;
};

export type CastPerson = {
	id: number;
	url: string;
	name: string;
	country: Country;
	birthday: string;
	deathday: string;
	gender: string;
	image: Image;
	updated: number;
};
