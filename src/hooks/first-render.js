import { create } from 'zustand'

export const useFirstRender = create((set, get) => ({
  isFR: true,
  setIsFR: () => {
    set({ isFR: !get().isFR })
  },
}))
