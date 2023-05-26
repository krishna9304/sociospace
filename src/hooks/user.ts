import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface CurrentUserState {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

export const useCurrentUser = create<CurrentUserState>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  removeUser: () => set({ user: null }),
}));
