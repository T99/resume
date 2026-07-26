/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 11:02 PM -- July 25th, 2026
 * Project: resume
 */

"use client"

import { useLocalStorageItem } from "@/util/use-local-storage-item";
import { Dispatch, SetStateAction } from "react";

export type Theme = {
	name: string;
	className: string;
};

export const THEMES: Theme[] = [
	{
		name: "Deep Teal",
		className: "",
	},
	{
		name: "Paper",
		className: "",
	},
	{
		name: "Framework",
		className: "",
	},
];

export function useTheme(): [Theme, Dispatch<SetStateAction<string>>] {
	
	const [themeName, setTheme] = useLocalStorageItem("theme", THEMES[0].name);
	const theme = THEMES.find((theme: Theme): boolean => theme.name === themeName) ?? THEMES[0];
	
	return [theme, setTheme];
	
}