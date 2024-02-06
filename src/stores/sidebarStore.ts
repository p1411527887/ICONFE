import {create} from "zustand";

interface SidebarState {
    sidebarSrc: string;
    setSidebarSrc: (value: string) => void;
}

export const sidebarStore = create<SidebarState>((set) => ({
    sidebarSrc: '',
    setSidebarSrc: (value) => set({sidebarSrc: value}),
}));