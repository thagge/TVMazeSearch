import { EmbeddedImage } from '../../models/Image';
import styles from './ShowImages.module.css';
type ShowImagesProps = {
	images: EmbeddedImage[];
};

const ShowImages = ({ images }: ShowImagesProps) => {
	return (
		<div className={styles.images}>
			{images.map((image) => (
				<img
					className={styles.image}
					key={image.id}
					src={image.resolutions.original.url}
				/>
			))}
		</div>
	);
};

export default ShowImages;
