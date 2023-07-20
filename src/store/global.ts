import { create } from "zustand";

interface Store {
    connected: boolean,
    lastReceived: Date | null,
    selectedMovie: number,
    setConnected: (connected: boolean) => void,
    setLastReceived: (lastReceived: Date) => void,
    setSelectedMovie: (selectedMovie: number) => void;
}

const useGlobalStore = create<Store>()((set) => ({
    connected: false,
    lastReceived: null,
    selectedMovie: -1,
    setConnected: (connected: boolean) => set({ connected }),
    setLastReceived: (lastReceived: Date) => set({ lastReceived }),
    setSelectedMovie: (selectedMovie: number) => set({ selectedMovie })
}));

export default useGlobalStore;