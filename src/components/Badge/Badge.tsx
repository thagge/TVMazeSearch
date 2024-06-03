import { PropsWithChildren } from 'react';
import styles from './Badge.module.css';
import classNames from 'classnames';

type BadgeProps = {
	className?: string;
};

const Badge = ({ children, className }: PropsWithChildren<BadgeProps>) => {
	return (
		<span className={classNames(styles.badge, className)}>{children}</span>
	);
};

export default Badge;
