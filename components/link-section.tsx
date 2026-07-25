/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 5:39 PM -- July 25th, 2026
 * Project: resume
 */

import type { FunctionComponent, ReactNode } from "react";
import { LinkWithIcon, type LinkWithIconObject } from "@/components/link-with-icon";
import { ResumeSection } from "@/components/resume-section";

export type Props = Readonly<{
	sectionTitle: string;
	links: LinkWithIconObject[];
}>;

export const LinkSection: FunctionComponent<Props> = ({
	sectionTitle,
	links,
}: Props): ReactNode => (
	<ResumeSection title={sectionTitle}>
		{links.map((item: LinkWithIconObject): ReactNode =>
			<LinkWithIcon key={item.name} {...item} />
		)}
	</ResumeSection>
);
