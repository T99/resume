/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:17 PM -- August 17th, 2022
 * Project: resume
 */

import styles from "./columns.module.scss";
import type { FunctionComponent, ReactNode } from "react";

export type Props = Readonly<{ 
	children: ReactNode,
}>;

export const Columns: FunctionComponent<Props> = (
	{ children }: Props
): ReactNode => (
	<div className={styles.container}>
		{children}
	</div>
);
