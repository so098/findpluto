import create from "zustand";

const itemStore = create((set) => ({
  speed: 30,
  time: 25,
  setSpeed: (speedNumber) => set(() => ({ speed: speedNumber })),
  setTime: (timeNumber) => set(() => ({ time: timeNumber })),
}));

export default itemStore;
