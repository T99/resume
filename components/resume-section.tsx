/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 4:11 PM -- August 17th, 2022
 * Project: resume
 */

import styles from "./resume-section.module.scss";
import type { FunctionComponent, ReactNode } from "react";

export type Props = Readonly<{ 
	title?: string,
	children: ReactNode,
}>;

export const ResumeSection: FunctionComponent<Props> = ({
	title,
	children,
}: Props): ReactNode => (
	<div className={styles.container}>
		{title ? <h3 className={styles.sectionTitle}>{title}</h3> : null}
		<div className={styles.innerContainer}>
			{children}
		</div>
	</div>
);
