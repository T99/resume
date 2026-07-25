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
    positionTitle: string,
    startDate: string,
    endDate: string,
    description: string,
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
            positionTitle,
            startDate,
            endDate,
            description,
        }: ProfessionalHistoryObject): ReactNode => (
            <div className={styles.container} key={companyName + positionTitle}>
                <div className={styles.headerContainer}>
                    <h3 className={styles.header}>
                        {companyName}, <span className={styles.position}>{positionTitle}</span>
                    </h3>
                    <h3 className={styles.timespan}>{startDate} - {endDate}</h3>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        ))}
    </ResumeSection>
);
