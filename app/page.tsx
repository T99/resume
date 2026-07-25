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
import { ProfessionalHistory } from "@/components/professional-history";
import { Skills, SkillObject } from "@/components/skills";
import { LinkSection } from "@/components/link-section";

const Home: FunctionComponent = (): ReactNode => (
	<div className={styles.container}>
		<div className={styles.innerContainer}>
			<ResumeSection>
				<h1 className={styles.name}>{resume.name}</h1>
			</ResumeSection>
			<Columns>
				<LinkSection sectionTitle="Contact Information" links={resume.contactInformation} />
				<LinkSection sectionTitle="Find Me Online" links={resume.socialMediaLinks} />
			</Columns>
			<ProfessionalHistory history={resume.professionalHistory} />
			{Object.entries(resume.skillsSections).map(
				([sectionTitle, sectionItems]: [string, SkillObject[]]): ReactNode =>
					<Skills sectionTitle={sectionTitle}
							skills={sectionItems}
							key={sectionTitle} />
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
