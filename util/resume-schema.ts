/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 4:23 PM -- July 25th, 2026
 * Project: resume
 */

import type { ContactInformationObject } from "@/components/contact-information";
import type { ProfessionalHistoryObject } from "@/components/professional-history";
import type { SkillObject } from "@/components/skills";

export type Resume = {
	name: string;
	title: string;
	bio: string;
	contactInformation: ContactInformationObject[];
	socialMediaLinks: ContactInformationObject[];
	professionalHistory: ProfessionalHistoryObject[];
	skillsSections: Record<string, SkillObject[]>;
};

