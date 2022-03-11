import create from "zustand";

const clueStore = create((set) => ({
  clues: [],
  symbols: [],
  clueIndex: 0,
  johnPosition: [],
  setClue: (choiceClue) => set(() => ({ clues: choiceClue })),
  setSymbols: (choiceSymbol) => set(() => ({ symbols: choiceSymbol })),
  setClueIndex: (clueLocationNumber) =>
    set(() => ({ clueIndex: clueLocationNumber })),
  setJohnPosition: (position) => set(() => ({ johnPosition: position })),
}));

export default clueStore;
