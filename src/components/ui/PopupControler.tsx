"use client";

import { useEffect } from "react";
import { usePopupControler } from "@/store/usePopupControler";
import AIChat from "../popup/AIChat";
import Alert from "../popup/Alert";

export default function PopupControler() {
  const aiChatPopup = usePopupControler((state) => state.aiChatPopup);
  const alertPopup = usePopupControler((state) => state.alertPopup);

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyPopupOpen = aiChatPopup || alertPopup;

    // body 클래스 토글
    if (isAnyPopupOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("open");
    };
  }, [aiChatPopup, alertPopup]);

  return (
    <>
      {aiChatPopup && <AIChat />}
      {alertPopup && <Alert />}
    </>
  );
}
