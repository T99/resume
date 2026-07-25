/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 1:49 PM -- August 17th, 2022
 * Project: resume
 */

import styles from "./link-with-icon.module.scss";
import type { ReactElement, FunctionComponent, ReactNode } from "react";

export type LinkWithIconObject = {
	name: string,
	icon: ReactElement,
	content: string,
	link: string,
};

export type Props = Readonly<LinkWithIconObject>;

export const LinkWithIcon: FunctionComponent<Props> = ({
	name,
	icon,
	content,
	link,
}: Props): ReactNode => (
	<div className={styles.container} title={name}>
		<a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
			<div className={styles.iconContainer}>
				{(icon as unknown as () => ReactNode)()}
			</div>
			<p className={styles.linkText}>{content}</p>
		</a>
	</div>
);
