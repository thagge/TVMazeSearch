import placeholder from './../../assets/placeholder.png';

type ImageProps = {
	src?: string;
};

const Image = ({ src }: ImageProps) => {
	return <img src={src || placeholder} />;
};

export default Image;
