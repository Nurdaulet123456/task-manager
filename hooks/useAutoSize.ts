import { useEffect, Dispatch, SetStateAction } from "react";

export const useAutoSizeHeight = (textAreaRef: HTMLTextAreaElement | null,
    value: string) => {

    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = value.length + "px";
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, value]);

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