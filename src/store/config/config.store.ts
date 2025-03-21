import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ConfigStore } from "./config.types";

export const configStore = create(persist<ConfigStore>(
    set => ({
        theme: 'turquoise',
    }),
    {
        name: 'config',
        storage: createJSONStorage(() => localStorage)
    }
))