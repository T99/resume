/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 1:49 PM -- August 17th, 2022
 * Project: resume
 */

import styles from "./contact-information.module.scss";
import type { FunctionComponent, ReactNode } from "react";
import type { ContactInformationObject } from "../data/contact-information-object";

export type Props = Readonly<ContactInformationObject>;

export const ContactInformation: FunctionComponent<Props> = ({
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
