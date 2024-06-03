import styles from './SearchField.module.css';

type SearchFieldProps = {
	onSearchBlur?: () => void;
	onSearchFocus?: () => void;
	onSearchChange: (text: string) => void;
};

const SearchField = ({
	onSearchBlur,
	onSearchFocus,
	onSearchChange,
}: SearchFieldProps) => {
	const handleBlur = () => {
		if (onSearchBlur) onSearchBlur();
	};

	const handleOnFocus = () => {
		if (onSearchFocus) onSearchFocus();
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onSearchChange(e.target.value);
	};

	return (
		<input
			className={styles['search-field']}
			placeholder='Enter search term'
			onBlur={handleBlur}
			onChange={handleOnChange}
			onFocus={handleOnFocus}
		/>
	);
};

export default SearchField;
