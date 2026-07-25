/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 7:29 PM -- August 16th, 2022
 * Project: resume
 */

import styles from "./professional-history.module.scss";
import type { FunctionComponent, ReactNode } from "react";
import { ResumeSection } from "@/components/resume-section";

export type ProfessionalHistoryObject = {
    companyName: string,
	companyLink: string,
    positionTitle: string,
    startDate: string,
    endDate: string,
    description?: string,
	bullets?: string[],
};

export type Props = Readonly<{
    history: ProfessionalHistoryObject[];
}>;

export const ProfessionalHistory: FunctionComponent<Props> = ({
    history,
}: Props): ReactNode => (
    <ResumeSection title="Professional History">
        {history.map(({
            companyName,
			companyLink,
            positionTitle,
            startDate,
            endDate,
            description,
			bullets,
        }: ProfessionalHistoryObject): ReactNode => (
            <div className={styles.container} key={companyName + positionTitle}>
                <div className={styles.headerContainer}>
                    <h3 className={styles.header}>
						<a href={companyLink}
						   className={styles.companyName}
						   target="_blank"
						   rel="noopener noreferrer">{companyName}</a>{" "}
						<span className={styles.position}>{positionTitle}</span>
                    </h3>
                    <h3 className={styles.timespan}>{startDate} - {endDate}</h3>
                </div>
				{description === undefined || description.length <= 0 ? null : <p className={styles.description}>{description}</p>}
				{bullets === undefined || bullets.length <= 0 ? null : (
					<ul className={styles.bullets}>
						{bullets.map((bullet: string): ReactNode => (
							<li key={bullet} className={styles.bullet}><p>{bullet}</p></li>
						))}
					</ul>
				)}
            </div>
        ))}
    </ResumeSection>
);
