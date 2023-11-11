import { ReactNode } from "react";

export interface ILayout {
    children?: ReactNode
    title?: string
}

export function ReturnTypes(): string | number | null | undefined {
    return typeof "string" || typeof 0 || typeof null || typeof undefined
}   