"use client";

import { useEffect } from "react";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import StoreSelectSheet from "../bottomsheet/StoreSelectSheet";
import GoToOptionSheet from "../bottomsheet/GoToOptionSheet";
import StoreSearchSheet from "../bottomsheet/StoreSearchSheet";

export default function BottomSheetControler() {
  const storeSelectSheet = useBottomSheetControler((state) => state.storeSelectSheet);
  const goToOptionSheet = useBottomSheetControler((state) => state.goToOptionSheet);
  const storeSearchSheet = useBottomSheetControler((state) => state.storeSearchSheet);

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyBottomSheetOpen =
      storeSelectSheet ||
      goToOptionSheet ||
      storeSearchSheet;

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
    storeSelectSheet,
    goToOptionSheet,
    storeSearchSheet,
  ]);

  return (
    <>
      {storeSelectSheet && <StoreSelectSheet />}
      {goToOptionSheet && <GoToOptionSheet />}
      {storeSearchSheet && <StoreSearchSheet />}
    </>
  );
}
