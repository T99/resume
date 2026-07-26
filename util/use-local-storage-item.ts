/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsea.rs/).
 * 10:41 PM -- July 25th, 2026
 * Project: resume
 */

"use client"

import "client-only";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type State<T> = [T, Dispatch<SetStateAction<T>>];

export function useLocalStorageItem(item: string, defaultValue: string): State<string> {
	
	const [value, setValue]: State<string> = useState<string>(
		localStorage.getItem(item) ?? defaultValue
	);
	
	useEffect((): (() => void) => {
		
		function storageEventHandler(event: StorageEvent): void {
			if (
				event.storageArea === window.localStorage &&
				event.key === item
			) {
				if (event.newValue !== null) setValue(event.newValue);
				else localStorage.setItem(item, defaultValue);
			}
		}
		
		window.addEventListener("storage", storageEventHandler);
		localStorage.setItem(item, value);
		
		return (): void => window.removeEventListener("storage", storageEventHandler);
		
	}, [item, value])
	
	return [value, setValue];
	
}