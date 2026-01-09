"use client";

import { useEffect } from "react";
import { usePopupControler } from "@/store/usePopupControler";
import AIChat from "../popup/AIChat";
import Alert from "../popup/Alert";
import PhotoPopup from "../popup/PhotoPopup";
import AddressSearchPop from "../popup/AddressSearchPop";

export default function PopupControler() {
  const aiChatPopup = usePopupControler((state) => state.aiChatPopup);
  const alertPopup = usePopupControler((state) => state.alertPopup);
  const photoPopup = usePopupControler((state) => state.photoPopup);
  const addressSearchPopup = usePopupControler(
    (state) => state.addressSearchPopup
  );

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyPopupOpen =
      aiChatPopup || alertPopup || photoPopup || addressSearchPopup;

    // body 클래스 토글
    if (isAnyPopupOpen) {
      if (!document.body.classList.contains("open")) {
        // 👈 중복 방지
        document.body.classList.add("open");
      }
    } else {
      if (document.body.classList.contains("open")) {
        // 👈 중복 방지
        document.body.classList.remove("open");
      }
    }

    return () => {
      document.body.classList.remove("open");
    };
  }, [aiChatPopup, alertPopup, photoPopup, addressSearchPopup]);

  return (
    <>
      {aiChatPopup && <AIChat />}
      {alertPopup && <Alert />}
      {photoPopup && <PhotoPopup />}
      {addressSearchPopup && <AddressSearchPop />}
    </>
  );
}
