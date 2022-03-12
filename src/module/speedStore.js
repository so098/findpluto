import create from "zustand";

const speedStore = create((set) => ({
  speed: 100,
  setSpeed: (speedNumber) => set(() => ({ speed: speedNumber })),
}));

export default speedStore;
