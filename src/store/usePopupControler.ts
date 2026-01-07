import { create } from "zustand";

type PopupControlerState = {
  aiChatPopup: boolean;
  setAiChatPopup: (isOpen: boolean) => void;
  alertPopup: boolean;
  setAlertPopup: (isOpen: boolean) => void;
};
export const usePopupControler = create<PopupControlerState>((set) => ({
  aiChatPopup: false,
  setAiChatPopup: (isOpen: boolean) => set({ aiChatPopup: isOpen }),
  alertPopup: false,
  setAlertPopup: (isOpen: boolean) => set({ alertPopup: isOpen }),
}));
