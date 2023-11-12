import { useEffect, Dispatch, SetStateAction, useRef } from "react";

export const useAutoSizeHeight = (
    value: string) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"; 
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    }, [value]);

    return textAreaRef;
}

export const useAutoSizeWidth = (value?: string, setWidth?: Dispatch<SetStateAction<number>>) => {
    useEffect(() => {
        if (value?.length && setWidth) {
            setWidth(Number(value?.length));
        } else if (setWidth) {
            setWidth(0);
        }
    }, [value]);
} 