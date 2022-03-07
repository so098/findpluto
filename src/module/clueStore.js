import create from "zustand";

const clueStore = create((set) => ({
  clues: [],
  symbols: [],
  setClue: (choiceClue) => set(() => ({ clues: choiceClue })),
  setSymbols: (choiceSymbol) => set(() => ({ symbols: choiceSymbol })),
}));

export default clueStore;
