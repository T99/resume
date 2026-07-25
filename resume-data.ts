/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 4:23 PM -- July 25th, 2026
 * Project: resume
 */

import { Resume } from "@/util/resume-schema";
import githubIcon from "@/assets/icons/github.svg";
import layersIcon from "@/assets/icons/layers.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import mailIcon from "@/assets/icons/mail.svg";
import mapPinIcon from "@/assets/icons/map-pin.svg";
import phoneIcon from "@/assets/icons/phone.svg";

export const resume: Resume = {
	name: "Trevor Sears",
	title: "Software Engineer",
	bio: "",
	contactInformation: [
		{
			name: "Mobile Phone Number",
			icon: phoneIcon,
			content: "(231) 499 - 8996",
			link: "tel:+1 (231) 499 - 8996",
		},
		{
			name: "Email Address",
			icon: mailIcon,
			content: "trevor@trevorsears.com",
			link: "mailto:trevor@trevorsears.com",
		},
		{
			name: "Location",
			icon: mapPinIcon,
			content: "Traverse City, Michigan",
			link: "https://goo.gl/maps/u5sLKDSg5f3Z3fpf8",
		},
	],
	socialMediaLinks: [
		{
			name: "GitHub Account",
			icon: githubIcon,
			content: "github.com/T99",
			link: "https://github.com/T99",
		},
		{
			name: "Stack Overflow Account",
			icon: layersIcon,
			content: "stackoverflow.com/users/trevor-sears",
			link: "https://stackoverflow.com/users/4997194/trevor-sears"
		},
		{
			name: "LinkedIn Account",
			icon: linkedinIcon,
			content: "linkedin.com/in/trevortsears",
			link: "https://www.linkedin.com/in/trevortsears/"
		},
	],
	professionalHistory: [
		{
			companyName: "Ampel Feedback",
			positionTitle: "Front-end Developer & Designer",
			startDate: "September 2018",
			endDate: "March 2020",
			description: "Developed a scratch-built front-end SPA framework for " +
				"building highly dynamic and interactive web apps that was used " +
				"as the engine of Ampel Feedback’s flagship customer feedback " +
				"kiosk. Also utilized React and Redux to create a multi-tenant " +
				"management dashboard for clients. Highly independent workflow, " +
				"operating remotely to Traverse City while living in Houghton, MI."
		},
		{
			companyName: "Knorr Marketing",
			positionTitle: "Full Stack Developer",
			startDate: "March 2021",
			endDate: "Present",
			description: "Worked to maintain and improve a proprietary PHP-based " +
				"CMS that specialized in the area of furniture eCommerce " +
				"websites for a host of international clients. Operated as a " +
				"member of a small team responsible for backing 40+ sites, as " +
				"well as a database/catalogue of hundreds of thousands of " +
				"products, associated product information, and eCommerce data."
			
		},
	],
	skillsSections: {
		"Programming Languages": [
			{
				name: "JavaScript",
			},
			{
				name: "TypeScript",
			},
			{
				name: "Rust",
			},
			{
				name: "PHP",
			},
			{
				name: "Dash/Bash Scripting",
			},
			{
				name: "C",
			},
			{
				name: "C++",
			},
			{
				name: "C#/.NET",
			},
			{
				name: "Java",
			},
			{
				name: "Python",
			},
			{
				name: "Go",
			},
			{
				name: "Ruby",
			},
			{
				name: "HTML",
			},
			{
				name: "CSS",
			},
			{
				name: "Sass",
			},
			{
				name: "SQL (MySQL, PSQL)",
			},
			{
				name: "Powershell Scripting",
			},
			{
				name: "Regular Expressions (PCRE, etc.)",
			},
		],
		"Frameworks & Technologies": [
			{
				name: "ReactJS",
			},
			{
				name: "NextJS",
			},
			{
				name: "Advanced *nix Shell",
			},
			{
				name: "MongoDB/NoSQL",
			},
			{
				name: "NodeJS & NPM",
			},
			{
				name: "Advanced Git",
			},
			{
				name: "Windows Command Line/Powershell",
			},
			{
				name: "Domain & DNS Management",
			},
			{
				name: "GSuite/Google Workspace Management",
			},
			{
				name: "MySQL",
			},
			{
				name: "Postgres",
			},
			{
				name: "Vercel",
			},
			{
				name: "Vue",
			},
			{
				name: "Angular",
			},
			{
				name: "Webpack, Babel, Browserify",
			},
			{
				name: "Cloudflare",
			},
			{
				name: "DigitalOcean",
			},
			{
				name: "AWS (S3, EC2, Cloudfront, Lambda, etc.)",
			},
		],
	},
}