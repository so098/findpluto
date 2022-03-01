import create from "zustand";

const clueStore = create((set) => ({
  clues: [],
  setClue: (choiceClue) => set(() => ({ clues: choiceClue })),
}));

export default clueStore;
