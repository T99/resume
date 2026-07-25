/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 7:29 PM -- August 16th, 2022
 * Project: resume
 */

import styles from "./professional-history.module.scss";
import type { FunctionComponent, ReactNode } from "react";
import type { ProfessionalHistoryObject } from "@/data/professional-history-object";

export type Props = Readonly<ProfessionalHistoryObject>;

export const ProfessionalHistory: FunctionComponent<Props> = ({
    companyName,
    positionTitle,
    startDate,
    endDate,
    description,
}: Props): ReactNode => (
    <div className={styles.container}>
        <div className={styles.headerContainer}>
            <h3 className={styles.header}>
                {companyName}, <span className={styles.position}>{positionTitle}</span>
            </h3>
            <h3 className={styles.timespan}>{startDate} - {endDate}</h3>
        </div>
        <p className={styles.description}>{description}</p>
    </div>
);
