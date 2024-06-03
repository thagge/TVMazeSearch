import { Link } from 'react-router-dom';
import styles from './NotFoundError.module.css';
const NotFoundError = () => {
	return (
		<div className={styles.container}>
			The resource you are looking for could not be found.
			<Link to='/'>Go back to home</Link>
		</div>
	);
};

export default NotFoundError;
