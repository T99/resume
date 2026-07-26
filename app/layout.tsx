/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 9:57 PM -- June 29th, 2026
 * Project: resume
 */

"use client"

import "./globals.scss";
import styles from "./layout.module.scss";
import type { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Google_Sans, Noto_Serif } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { useTheme } from "@/util/use-theme";
import { ThemeSelector } from "@/components/theme-selector";

const baseFont = Google_Sans({
	variable: "--font-standard",
	subsets: ["latin"],
	weight: ["400", "700"],
});


const headerFont = Noto_Serif({
	variable: "--font-header",
	subsets: ["latin"],
	weight: "400",
});

const RootLayout: FunctionComponent<Readonly<PropsWithChildren>> = ({
	children,
}: Readonly<PropsWithChildren>): ReactNode => {
	
	const [theme, setTheme] = useTheme();
	
	return (
		<html lang="en"
		      className={[styles.html, baseFont.variable, headerFont.variable].join(" ")}
			  data-theme={theme.name}>
			<GoogleTagManager gtmId="GTM-NZ9Q5RJ" />
			<body className={styles.body}>
				<ThemeSelector activeTheme={theme} setActiveTheme={setTheme} />
				{children}
			</body>
		</html>
	);
	
};

export default RootLayout;
