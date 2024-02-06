import {create} from "zustand";

interface MainState {
    mainSrc: string;
    setMainSrc: (value: string) => void;
}

export const mainStore = create<MainState>((set) => ({
    mainSrc: '',
    setMainSrc: (value) => set({mainSrc: value}),
}));