import { create } from "zustand";

type BottomSheetControlerState = {
  locationSheet: boolean;
  setLocationSheet: (isOpen: boolean) => void;
};

export const useBottomSheetControler = create<BottomSheetControlerState>(
  (set) => ({
    locationSheet: false,
    setLocationSheet: (isOpen: boolean) => set({ locationSheet: isOpen }),
  })
);
