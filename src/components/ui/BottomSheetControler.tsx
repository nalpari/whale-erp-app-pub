"use client";

import { useEffect } from "react";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import StoreSelectSheet from "../bottomsheet/StoreSelectSheet";
import GoToOptionSheet from "../bottomsheet/GoToOptionSheet";

export default function BottomSheetControler() {
  const bottomSheetControler = useBottomSheetControler();

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyBottomSheetOpen =
      bottomSheetControler.storeSelectSheet ||
      bottomSheetControler.goToOptionSheet;

    // body 클래스 토글
    if (isAnyBottomSheetOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("open");
    };
  }, [
    bottomSheetControler.storeSelectSheet,
    bottomSheetControler.goToOptionSheet,
  ]);

  return (
    <>
      {bottomSheetControler.storeSelectSheet && <StoreSelectSheet />}
      {bottomSheetControler.goToOptionSheet && <GoToOptionSheet />}
    </>
  );
}
