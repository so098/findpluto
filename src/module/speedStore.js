import create from "zustand";

const speedStore = create((set) => ({
  speed: 50,
  setSpeed: (speedNumber) => set(() => ({ speed: speedNumber })),
}));

export default speedStore;
