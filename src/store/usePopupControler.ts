import { create } from "zustand";
import { devtools } from "zustand/middleware";

type PopupControlerState = {
  aiChatPopup: boolean;
  setAiChatPopup: (isOpen: boolean) => void;
  alertPopup: boolean;
  setAlertPopup: (isOpen: boolean) => void;
};

export const usePopupControler = create<PopupControlerState>()(
  devtools(
    (set) => ({
      aiChatPopup: false,
      setAiChatPopup: (isOpen: boolean) => set({ aiChatPopup: isOpen }, false, "popup/setAiChat"),
      alertPopup: false,
      setAlertPopup: (isOpen: boolean) => set({ alertPopup: isOpen }, false, "popup/setAlert"),
    }),
    { name: "PopupControlerStore" }
  )
);
