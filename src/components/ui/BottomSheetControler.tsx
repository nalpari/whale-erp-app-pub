"use client";

import { useEffect } from "react";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import StoreSelectSheet from "../bottomsheet/StoreSelectSheet";
import GoToOptionSheet from "../bottomsheet/GoToOptionSheet";
import StoreSearchSheet from "../bottomsheet/StoreSearchSheet";
import PhotoSelectSheet from "../bottomsheet/PhotoSelectSheet";
import TimeSelectSheet from "../bottomsheet/TimeSelectSheet";
import StaffSearchSheet from "../bottomsheet/StaffSearchSheet";

export default function BottomSheetControler() {
  const storeSelectSheet = useBottomSheetControler(
    (state) => state.storeSelectSheet
  );
  const goToOptionSheet = useBottomSheetControler(
    (state) => state.goToOptionSheet
  );
  const storeSearchSheet = useBottomSheetControler(
    (state) => state.storeSearchSheet
  );
  const photoSelectSheet = useBottomSheetControler(
    (state) => state.photoSelectSheet
  );
  const timeSelectSheet = useBottomSheetControler(
    (state) => state.timeSelectSheet
  );
  const staffSearchSheet = useBottomSheetControler(
    (state) => state.staffSearchSheet
  );
  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyBottomSheetOpen =
      storeSelectSheet ||
      goToOptionSheet ||
      storeSearchSheet ||
      photoSelectSheet ||
      timeSelectSheet ||
      staffSearchSheet;

    // body 클래스 토글
    if (isAnyBottomSheetOpen) {
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
  }, [
    storeSelectSheet,
    goToOptionSheet,
    storeSearchSheet,
    photoSelectSheet,
    timeSelectSheet,
    staffSearchSheet,
  ]);

  return (
    <>
      {storeSelectSheet && <StoreSelectSheet />}
      {goToOptionSheet && <GoToOptionSheet />}
      {storeSearchSheet && <StoreSearchSheet />}
      {photoSelectSheet && <PhotoSelectSheet />}
      {timeSelectSheet && <TimeSelectSheet />}
      {staffSearchSheet && <StaffSearchSheet />}
    </>
  );
}
