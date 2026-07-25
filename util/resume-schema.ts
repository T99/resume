/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 4:23 PM -- July 25th, 2026
 * Project: resume
 */

import type { LinkWithIconObject } from "@/components/link-with-icon";
import type { ProfessionalHistoryObject } from "@/components/professional-history";
import type { SkillObject } from "@/components/skills";

export type Resume = {
	name: string;
	title: string;
	bio: string;
	contactInformation: LinkWithIconObject[];
	socialMediaLinks: LinkWithIconObject[];
	professionalHistory: ProfessionalHistoryObject[];
	skillsSections: Record<string, SkillObject[]>;
};

