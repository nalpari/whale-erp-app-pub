"use client";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";

export default function StoreForm04() {
  const setTimeSelectSheet = useBottomSheetControler(
    (state) => state.setTimeSelectSheet
  );

  return (
    <div className="sub-cont-wrap">
      <div className="sub-cont-item-wrap">
        <div className="sub-cont-tit-wrap">
          <div className="sub-cont-tit">영업시간</div>
        </div>
        <div className="sub-item-bx">
          <div className="data-filed">
            <div className="filed-tit">평일</div>
            <div className="flex g8">
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                시작시간
              </button>
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                종료시간
              </button>
            </div>
          </div>
          <div className="data-filed">
            <div className="filed-tit sub">브레이크타임</div>
            <div className="flex g8">
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                시작시간
              </button>
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                종료시간
              </button>
            </div>
          </div>
          <div className="data-filed">
            <div className="filed-tit sub">요일선택</div>
            <div className="flex g8">
              <button className="btn-s outline-g">월</button>
              <button className="btn-s outline-g act">화</button>
              <button className="btn-s outline-g">수</button>
              <button className="btn-s outline-g">목</button>
              <button className="btn-s outline-g">금</button>
            </div>
          </div>
        </div>
        <div className="sub-item-bx">
          <div className="data-filed">
            <div className="filed-tit">토요일</div>
            <div className="flex g8">
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                09:00
              </button>
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                19:00
              </button>
            </div>
          </div>
          <div className="data-filed">
            <div className="filed-tit sub">브레이크타임</div>
            <div className="flex g8">
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                15:30
              </button>
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                16:00
              </button>
            </div>
          </div>
        </div>
        <div className="sub-item-bx">
          <div className="data-filed">
            <div className="filed-tit">일요일</div>
            <div className="flex g8">
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                시작시간
              </button>
              <button
                className="select-form al-l"
                onClick={() => setTimeSelectSheet(true)}
              >
                종료시간
              </button>
            </div>
          </div>
          <div className="data-filed">
            <div className="filed-tit sub">브레이크타임</div>
            <div className="flex g8">
              <button
                className="select-form al-l"
                disabled
                onClick={() => setTimeSelectSheet(true)}
              >
                시작시간
              </button>
              <button
                className="select-form al-l"
                disabled
                onClick={() => setTimeSelectSheet(true)}
              >
                종료시간
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
