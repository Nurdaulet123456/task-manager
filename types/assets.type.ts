import { EventHandler, KeyboardEvent } from "react";
import { ReturnTypes } from "@/utils/utils";

export type TTypes = ReturnType<typeof ReturnTypes>;

export type KeyboardEventHandler<T> = EventHandler<KeyboardEvent<T>>;
