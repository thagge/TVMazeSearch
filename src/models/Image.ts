export type EmbeddedImage = {
	id: number;
	type: string;
	main: boolean;
	resolutions: {
		original: EmbeddedImageResolution;
		medium: EmbeddedImageResolution;
	};
};

export type EmbeddedImageResolution = {
	url: string;
	width: number;
	height: number;
};

export type Image = {
	medium: string;
	original: string;
};
