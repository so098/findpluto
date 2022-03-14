import create from "zustand";

const speedStore = create((set) => ({
  speed: 30,
  setSpeed: (speedNumber) => set(() => ({ speed: speedNumber })),
}));

export default speedStore;
