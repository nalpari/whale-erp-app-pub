"use client";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import Image from "next/image";
import { useState } from "react";
import { Sheet } from "react-modal-sheet";

export default function WorkerEditSheet() {
  const workerEditSheet = useBottomSheetControler(
    (state) => state.workerEditSheet
  );
  const setWorkerEditSheet = useBottomSheetControler(
    (state) => state.setWorkerEditSheet
  );
  const [editType, setEditType] = useState(false);

  const handleClose = () => {
    setWorkerEditSheet(false);
  };

  return (
    <Sheet
      isOpen={workerEditSheet}
      onClose={handleClose}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>근무자 편집</h3>
            </div>
            <div className=" bottom-sheet-body">
              <div className="sheet-data-wrap">
                <div className="worker-info-wrap full">
                  <div className="worker-img">
                    <Image
                      src="assets/images/layout/avatar01.svg"
                      alt="근무자 이미지"
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="worker-info">
                    <div className="worker-name">
                      <span>김직원 님</span>에 대한
                    </div>
                    <div className="worker-name">변경할 항목을 선택하세요.</div>
                  </div>
                  <div className="work-badge-wrap">
                    <span className="badge blue">정직원 4h</span>
                  </div>
                </div>
                <div className="worker-info-wrap part">
                  <div className="worker-img">
                    <Image
                      src="assets/images/layout/avatar01.svg"
                      alt="근무자 이미지"
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="worker-info">
                    <div className="worker-name">
                      <span>김직원 님</span>에 대한
                    </div>
                    <div className="worker-name">변경할 항목을 선택하세요.</div>
                  </div>
                  <div className="work-badge-wrap">
                    <span className="badge green">파트 4h</span>
                  </div>
                </div>
                <div className="worker-info-wrap temporary">
                  <div className="worker-img">
                    <Image
                      src="assets/images/layout/avatar01.svg"
                      alt="근무자 이미지"
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="worker-info">
                    <div className="worker-name">
                      <span>김직원 님</span>에 대한
                    </div>
                    <div className="worker-name">변경할 항목을 선택하세요.</div>
                  </div>
                  <div className="work-badge-wrap">
                    <span className="badge brown">임시 4h</span>
                  </div>
                </div>
                <div className="flex g8">
                  <div className="block">
                    <button
                      className={`radio-btn block ${editType ? "" : "act"}`}
                      onClick={() => setEditType(false)}
                    >
                      삭제
                    </button>
                  </div>
                  <div className="block">
                    <button
                      className={`radio-btn block ${editType ? "act" : ""}`}
                      onClick={() => setEditType(true)}
                    >
                      교체
                    </button>
                  </div>
                </div>
                {editType && (
                  <div className="sheet-data-filed">
                    <div className="filed-tit">
                      교체 근무자<span className="imp"> *</span>
                    </div>
                    <div className="block">
                      <select name="" id="" className="select-form">
                        <option value="1">김직원</option>
                        <option value="2">이직원</option>
                        <option value="3">박직원</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom-sheet-footer">
              <button className="btn-form sky">취소</button>
              <button className="btn-form blue">저장</button>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={handleClose} />
    </Sheet>
  );
}
