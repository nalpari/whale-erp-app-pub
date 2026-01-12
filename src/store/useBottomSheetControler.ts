import { create } from "zustand";
import { devtools } from "zustand/middleware";

type BottomSheetControlerState = {
  storeSelectSheet: boolean;
  setStoreSelectSheet: (isOpen: boolean) => void;
  goToOptionSheet: boolean;
  setGoToOptionSheet: (isOpen: boolean) => void;
  storeSearchSheet: boolean;
  setStoreSearchSheet: (isOpen: boolean) => void;
  photoSelectSheet: boolean;
  setPhotoSelectSheet: (isOpen: boolean) => void;
  timeSelectSheet: boolean;
  setTimeSelectSheet: (isOpen: boolean) => void;
  staffSearchSheet: boolean;
  setStaffSearchSheet: (isOpen: boolean) => void;
  contractOptionSheet: boolean;
  setContractOptionSheet: (isOpen: boolean) => void;
  partStaffPaySheet: boolean;
  setPartStaffPaySheet: (isOpen: boolean) => void;
  bonusPaySheet: boolean;
  setBonusPaySheet: (isOpen: boolean) => void;
};

export const useBottomSheetControler = create<BottomSheetControlerState>()(
  devtools(
    (set) => ({
      storeSelectSheet: false,
      setStoreSelectSheet: (isOpen: boolean) =>
        set({ storeSelectSheet: isOpen }, false, "bottomSheet/setStoreSelect"),
      goToOptionSheet: false,
      setGoToOptionSheet: (isOpen: boolean) =>
        set({ goToOptionSheet: isOpen }, false, "bottomSheet/setGoToOption"),
      storeSearchSheet: false,
      setStoreSearchSheet: (isOpen: boolean) =>
        set({ storeSearchSheet: isOpen }, false, "bottomSheet/setStoreSearch"),
      photoSelectSheet: false,
      setPhotoSelectSheet: (isOpen: boolean) =>
        set({ photoSelectSheet: isOpen }, false, "bottomSheet/setPhotoSelect"),
      timeSelectSheet: false,
      setTimeSelectSheet: (isOpen: boolean) =>
        set({ timeSelectSheet: isOpen }, false, "bottomSheet/setTimeSelect"),
      staffSearchSheet: false,
      setStaffSearchSheet: (isOpen: boolean) =>
        set({ staffSearchSheet: isOpen }, false, "bottomSheet/setStaffSearch"),
      contractOptionSheet: false,
      setContractOptionSheet: (isOpen: boolean) =>
        set(
          { contractOptionSheet: isOpen },
          false,
          "bottomSheet/setContractOption"
        ),
      partStaffPaySheet: false,
      setPartStaffPaySheet: (isOpen: boolean) =>
        set(
          { partStaffPaySheet: isOpen },
          false,
          "bottomSheet/setPartStaffPay"
        ),
      bonusPaySheet: false,
      setBonusPaySheet: (isOpen: boolean) =>
        set({ bonusPaySheet: isOpen }, false, "bottomSheet/setBonusPay"),
    }),
    { name: "BottomSheetControlerStore" }
  )
);
