/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 9:57 PM -- June 29th, 2026
 * Project: resume
 */

import "./globals.css";
import styles from "./layout.module.scss";
import type { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Google_Sans, Noto_Serif } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

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
}: Readonly<PropsWithChildren>): ReactNode => (
	<html lang="en"
	      className={[styles.html, baseFont.variable, headerFont.variable].join(" ")}>
		<GoogleTagManager gtmId="GTM-NZ9Q5RJ" />
		<body className={styles.body}>
			{children}
		</body>
	</html>
);

export default RootLayout;
