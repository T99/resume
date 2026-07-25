/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 6:50 PM -- August 17th, 2022
 * Project: resume
 */

import styles from "./skills.module.scss";
import type { FunctionComponent, ReactNode } from "react";
import { ResumeSection } from "@/components/resume-section";

export type SkillObject = {
	name: string,
	link: string,
};

export type Props = Readonly<{
	sectionTitle: string,
	skills: SkillObject[],
}>;

export const Skills: FunctionComponent<Props> = ({
	sectionTitle,
	skills,
}: Props): ReactNode => {
	
	const items: ReactNode = skills
		.toSorted((a: SkillObject, b: SkillObject): number => a.name.localeCompare(b.name))
		.map(({ name, link }: SkillObject): ReactNode => (
			<a href={link}
			   className={styles.item}
			   target="_blank"
			   rel="noopener noreferrer"
			   key={name}>
				{name}
			</a>
		));
	
	return (
		<ResumeSection title={sectionTitle}>
			<div className={styles.container}>
				<div className={styles.innerContainer}>
					{items}
				</div>
			</div>
		</ResumeSection>
	);
	
};
