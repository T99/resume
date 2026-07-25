/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 9:57 PM -- June 29th, 2026
 * Project: resume
 */

import "./globals.css";
import styles from "./layout.module.scss";
import type { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Fauna_One, Playfair_Display } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const playfairDisplay = Playfair_Display({
	variable: "--font-standard",
	subsets: ["latin"],
	weight: ["400", "700"],
});


const faunaOne = Fauna_One({
	variable: "--font-header",
	subsets: ["latin"],
	weight: "400",
});

const RootLayout: FunctionComponent<Readonly<PropsWithChildren>> = ({
	children,
}: Readonly<PropsWithChildren>): ReactNode => (
	<html lang="en"
	      className={[styles.html, playfairDisplay.variable, faunaOne.variable].join(" ")}>
		<GoogleTagManager gtmId="GTM-NZ9Q5RJ" />
		<body className={styles.body}>
			{children}
		</body>
	</html>
);

export default RootLayout;
