import styles from './FindShowError.module.css';
const FindShowError = () => {
	return (
		<div className={styles.container}>
			Something went wrong when trying to fetch show. Please try again by making
			a new search and selecting the show again.
		</div>
	);
};
export default FindShowError;
