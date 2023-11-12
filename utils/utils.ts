import { ReactNode, KeyboardEvent, Dispatch, SetStateAction } from "react";

export interface ILayout {
    children?: ReactNode
    title?: string
}

export function ReturnTypes(): string | number | null | undefined {
    return typeof "string" || typeof 0 || typeof null || typeof undefined
}

export function handlerClick<T>(event: KeyboardEvent<T>, setIsComponentVisible: Dispatch<SetStateAction<boolean>>) {
    if (event.key === "Enter" && setIsComponentVisible) {
        setIsComponentVisible(false);
    }
};