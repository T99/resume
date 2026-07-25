import type { Metadata } from 'next';
/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 10:43 PM -- June 29th, 2026
 * Project: resume
 */

import styles from "./page.module.scss";
import type { FunctionComponent, ReactNode } from "react";
import { resume } from "@/resume-data";
import { Columns } from "@/components/columns";
import { ResumeSection } from "@/components/resume-section";
import { ContactInformation, type ContactInformationObject } from "@/components/contact-information";
import { ProfessionalHistory, type ProfessionalHistoryObject } from "@/components/professional-history";
import { Skills, SkillObject } from "@/components/skills";

const Home: FunctionComponent = (): ReactNode => (
	<div className={styles.container}>
		<div className={styles.innerContainer}>
			<ResumeSection>
				<h1 className={styles.name}>Trevor Sears</h1>
			</ResumeSection>
			<Columns>
				<ResumeSection title="Contact Information">
					{resume.contactInformation.map((item: ContactInformationObject): ReactNode =>
						<ContactInformation key={item.name} {...item} />
					)}
				</ResumeSection>
				<ResumeSection title="Find Me Online">
					{resume.socialMediaLinks.map((item: ContactInformationObject): ReactNode =>
						<ContactInformation key={item.name} {...item} />
					)}
				</ResumeSection>
			</Columns>
			<ProfessionalHistory history={resume.professionalHistory} />
			{Object.entries(resume.skillsSections).map(
				([sectionTitle, sectionItems]: [string, SkillObject[]]): ReactNode =>
					<ResumeSection title={sectionTitle} key={sectionTitle}>
						<Skills skills={sectionItems.toSorted(
							(a: SkillObject, b: SkillObject): number =>
								a.name.localeCompare(b.name)
						)} />
					</ResumeSection>
			)}
		</div>
	</div>
);

export default Home;

const title: string = `${resume.name} | Resume`;
const description: string = "An overview of my professional background, experience, accomplishments, and outlook.";

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		type: "profile",
		url: "https://resume.trevorsea.rs/",
		images: [{
			url: "https://resume.trevorsea.rs/headshot.jpg",
			width: 961,
			height: 961,
			alt: `A headshot image of ${resume.name}.`,
		}]
	}
};
