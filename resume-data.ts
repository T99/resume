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
	bio: "Full-stack software engineer with experience designing developer tooling, analytics platforms, and modern " +
		"web applications. Strong background in Typescript, React, Next.js, Rust, SQL, and API design with a focus " +
		"on maintainable architecture, developer productivity, and solving complex technical problems.",
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
			companyLink: "https://www.facebook.com/ampelfeedback/",
			positionTitle: "Front End Developer & Designer",
			startDate: "September 2018",
			endDate: "June 2020",
			description: undefined,
			bullets: [
				"Designed and developed a custom React/Redux single-page application framework that served as the foundation for the company's flagship customer feedback kiosk platform.",
				"Built a multi-tenant client management dashboard for configuring and administering customer deployments.",
				"Implemented highly interactive front-end interfaces with an emphasis on maintainability, responsiveness, and reusable architecture.",
			],
		},
		{
			companyName: "Knorr Marketing",
			companyLink: "https://www.knorrmarketing.com/",
			positionTitle: "Full Stack Developer",
			startDate: "March 2021",
			endDate: "June 2023",
			description: undefined,
			bullets: [
				"Modernized features for a proprietary multi-tenant PHP-based CMS powering the eCommerce websites of more than 40 independent businesses.",
				"Built full-stack functionality supporting hundreds of thousands of catalog products and their associated metadata across a shared platform.",
				"Improved existing backend systems and customer-facing functionality while working as part of a small engineering team.",
			],
		},
		{
			companyName: "Unite Digital",
			companyLink: "https://unitedigital.com/",
			positionTitle: "Software Engineer",
			startDate: "June 2023",
			endDate: "April 2026",
			description: undefined,
			bullets: [
				"Helped lead the complete modernization of a legacy React analytics dashboard by rebuilding it as a Next.js application.",
				"Reduced technical debt while improving maintainability, developer experience, and the long-term scalability of the platform.",
				"Engineered full-stack features for analytics dashboards and internal business tooling used across the organization to deliver performant, user-focused functionality.",
			],
		},
	],
	skillsSections: {
		"Programming Languages": [
			{
				name: "C",
				link: "https://www.c-language.org/",
			},
			{
				name: "C#",
				link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
			},
			{
				name: "C++",
				link: "https://isocpp.org/",
			},
			{
				name: "Go",
				link: "https://go.dev/",
			},
			{
				name: "Java",
				link: "https://www.oracle.com/java/",
			},
			{
				name: "JavaScript",
				link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			},
			{
				name: "PHP",
				link: "https://www.php.net/",
			},
			{
				name: "Python",
				link: "https://www.python.org/",
			},
			{
				name: "Ruby",
				link: "https://www.ruby-lang.org/",
			},
			{
				name: "Rust",
				link: "https://rust-lang.org/",
			},
			{
				name: "TypeScript",
				link: "https://www.typescriptlang.org/",
			},
		],
		"Scripting, Markup, & Other Dialects": [
			{
				name: "Bash",
				link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
			},
			{
				name: "CSS3",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
			{
				name: "GraphQL",
				link: "https://graphql.org/",
			},
			{
				name: "HTML5",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "JSON",
				link: "https://www.json.org/",
			},
			{
				name: "Markdown",
				link: "https://en.wikipedia.org/wiki/Markdown",
			},
			{
				name: "PowerShell",
				link: "https://learn.microsoft.com/en-us/powershell/",
			},
			{
				name: "Regular Expressions (Regex)",
				link: "https://en.wikipedia.org/wiki/Regular_expression",
			},
			{
				name: "Sass/SCSS",
				link: "https://sass-lang.com/",
			},
			{
				name: "SQL",
				link: "https://en.wikipedia.org/wiki/SQL",
			},
			{
				name: "T-SQL",
				link: "https://learn.microsoft.com/en-us/sql/t-sql/language-reference",
			},
			{
				name: "TOML",
				link: "https://toml.io/",
			},
			{
				name: "XML",
				link: "https://en.wikipedia.org/wiki/XML",
			},
			{
				name: "YAML",
				link: "https://yaml.org/",
			},
		],
		"Web Development Frameworks & Tooling": [
			{
				name: "Angular",
				link: "https://angular.dev/",
			},
			{
				name: "Babel",
				link: "https://babeljs.io/",
			},
			{
				name: "Browserify",
				link: "https://browserify.org/",
			},
			{
				name: "Express.js",
				link: "https://expressjs.com/",
			},
			{
				name: "Jest",
				link: "https://jestjs.io/",
			},
			{
				name: "Next.js",
				link: "https://nextjs.org/",
			},
			{
				name: "Nuxt.js",
				link: "https://nuxt.com/",
			},
			{
				name: "Node.js & NPM",
				link: "https://nodejs.org/",
			},
			{
				name: "pnpm",
				link: "https://pnpm.io/",
			},
			{
				name: "React",
				link: "https://react.dev/",
			},
			{
				name: "Redux",
				link: "https://redux.js.org/",
			},
			{
				name: "TanStack",
				link: "https://tanstack.com/",
			},
			{
				name: "Turbopack",
				link: "https://nextjs.org/docs/app/api-reference/turbopack",
			},
			{
				name: "Vite",
				link: "https://vite.dev/",
			},
			{
				name: "Vue",
				link: "https://vuejs.org/",
			},
			{
				name: "Webpack",
				link: "https://webpack.js.org/",
			},
			{
				name: "yarn",
				link: "https://yarnpkg.com/",
			}
		],
		"Developer Tooling & Technologies": [
			{
				name: "CI/CD",
				link: "https://en.wikipedia.org/wiki/CI/CD",
			},
			{
				name: "Docker",
				link: "https://www.docker.com/",
			},
			{
				name: "ESLint",
				link: "https://eslint.org/",
			},
			{
				name: "Git",
				link: "https://git-scm.com/",
			},
			{
				name: "GitHub Actions",
				link: "https://github.com/features/actions",
			},
			{
				name: "Linux",
				link: "https://www.linux.org/",
			},
			{
				name: "MongoDB",
				link: "https://www.mongodb.com/",
			},
			{
				name: "MySQL",
				link: "https://www.mysql.com/",
			},
			{
				name: "MariaDB",
				link: "https://mariadb.org/",
			},
			{
				name: "OpenAPI/Swagger",
				link: "https://www.openapis.org/",
			},
			{
				name: "Postgres",
				link: "https://www.postgresql.org/",
			},
			{
				name: "Prettier",
				link: "https://prettier.io/",
			},
			{
				name: "REST APIs",
				link: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
			},
			{
				name: "WebSockets",
				link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
			},
		],
		"Cloud Platforms": [
			{
				name: "AWS (Amazon Web Services)",
				link: "https://aws.amazon.com/",
			},
			{
				name: "Cloudflare",
				link: "https://www.cloudflare.com/",
			},
			{
				name: "DigitalOcean",
				link: "https://www.digitalocean.com/",
			},
			{
				name: "Google Cloud Platform",
				link: "https://cloud.google.com/",
			},
			{
				name: "Microsoft Azure",
				link: "https://azure.microsoft.com/",
			},
			{
				name: "Vercel",
				link: "https://vercel.com/",
			},
		],
	},
}