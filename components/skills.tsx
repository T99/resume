/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 6:50 PM -- August 17th, 2022
 * Project: resume
 */

import styles from "./skills.module.scss";
import type { FunctionComponent, ReactNode } from "react";

export type SkillObject = {
	name: string,
};

export type Props = Readonly<{
	skills: SkillObject[],
}>;

export const Skills: FunctionComponent<Props> = ({
	skills,
}: Props): ReactNode => {
	
	const items: ReactNode = skills.map(
		({ name }: SkillObject) => (
			<div key={name} className={styles.item}>
				<p className={styles.itemText}>{name}</p>
			</div>
		)
	);
	
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				{items}
			</div>
		</div>
	);
	
};
