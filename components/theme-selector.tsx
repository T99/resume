/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 4:16 PM -- July 24th, 2026
 * Project: resume
 */

"use client"

import styles from "./theme-selector.module.scss";
import type { FunctionComponent, ReactNode } from "react";
import { Theme, THEMES } from "@/util/use-theme";

export type Props = Readonly<{
	activeTheme: Theme;
	setActiveTheme: (theme: string) => void;
}>;

export const ThemeSelector: FunctionComponent<Props> = ({
	activeTheme,
	setActiveTheme,
}: Props): ReactNode => (
	<div className={styles.container}>
		{THEMES.map((theme: Theme): ReactNode => (
			<div key={theme.name} onClick={(): void => setActiveTheme(theme.name)}>
				<p>{theme.name}</p>
			</div>
		))}
	</div>
);