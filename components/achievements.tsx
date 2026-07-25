/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 6:50 PM -- August 17th, 2022
 * Project: resume
 */

import styles from "./achievements.module.scss";
import type { FunctionComponent, ReactNode } from "react";
import type { AchievementsAndSkillsObject } from "@/data/achievements-and-skills-object";

export type Props = Readonly<{
	achievements: AchievementsAndSkillsObject[],
}>;

export const Achievements: FunctionComponent<Props> = (
	{ achievements }: Props,
): ReactNode => {
	
	const items: ReactNode = achievements.map(
		({ name }: AchievementsAndSkillsObject) => (
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
