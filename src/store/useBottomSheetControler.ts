import { create } from "zustand";

type BottomSheetControlerState = {
  storeSelectSheet: boolean;
  setStoreSelectSheet: (isOpen: boolean) => void;
  goToOptionSheet: boolean;
  setGoToOptionSheet: (isOpen: boolean) => void;
};

export const useBottomSheetControler = create<BottomSheetControlerState>(
  (set) => ({
    storeSelectSheet: false,
    setStoreSelectSheet: (isOpen: boolean) => set({ storeSelectSheet: isOpen }),
    goToOptionSheet: false,
    setGoToOptionSheet: (isOpen: boolean) => set({ goToOptionSheet: isOpen }),
  })
);
