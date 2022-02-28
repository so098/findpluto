import create from "zustand";

const userNameStore = create((set) => ({
  name: "에리스",
  setUserName: (userName) => set((state) => ({ name: userName || state.name })),
}));

export default userNameStore;
