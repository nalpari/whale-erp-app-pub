"use client";

import { useBottomSheetControler } from "@/store/useBottomSheetControler";

export default function EstablishmentList() {
  const setTimeSelectSheet = useBottomSheetControler(
    (state) => state.setTimeSelectSheet
  );
  return (
    <div className="container">
      <div className="sub-tit-wrap ">
        <div className="sub-tit">점포별 근무 계획 수립 </div>
      </div>
      <div className="sub-content-body">
        <div className="search-bx staff">
          <div className="search-count">
            검색결과 <span>128건</span>
          </div>
          <button className="search-btn act">
            <i className="icon-search"></i>
            <span>검색</span>
          </button>
        </div>
        <div className="plan-table-wrap">
          <div className="plan-table-item">
            <div className="plan-table-header">
              <div className="plan-table-day">2025.12.26 월</div>
              <div className="auto-right">
                <button className="btn-s black ">추가</button>
              </div>
            </div>
            <div className="plan-table-content">
              <div className="sub-item-bx full">
                <div className="plan-staff-head">
                  <div className="plan-staff-info">
                    <span className="badge blue">정직원</span>
                    <span className="name">김직원 </span>
                    <span className="time">8h</span>
                  </div>
                  <div className="auto-right">
                    <button className="contract-arr"></button>
                  </div>
                </div>
                <div className="plan-time-form">
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">근무시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">휴계시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-item-bx part">
                <div className="plan-staff-head">
                  <div className="plan-staff-info">
                    <span className="badge green">파트</span>
                    <span className="name">김직원 </span>
                    <span className="time">8h</span>
                  </div>
                  <div className="auto-right">
                    <button className="contract-arr"></button>
                  </div>
                </div>
                <div className="plan-time-form">
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">근무시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">휴계시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-item-bx temporary">
                <div className="plan-staff-head">
                  <div className="plan-staff-info">
                    <span className="badge brown">임시</span>
                    <span className="name">김직원 </span>
                    <span className="time">8h</span>
                  </div>
                  <div className="auto-right">
                    <button className="contract-arr"></button>
                  </div>
                </div>
                <div className="plan-time-form">
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">근무시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">휴계시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="plan-table-item">
            <div className="plan-table-header">
              <div className="plan-table-day">2025.12.25 일</div>
              <div className="auto-right">
                <button className="btn-s black ">추가</button>
              </div>
            </div>
            <div className="plan-table-content">
              <div className="sub-item-bx full">
                <div className="plan-staff-head">
                  <div className="plan-staff-info">
                    <span className="badge blue">정직원</span>
                    <span className="name">김직원 </span>
                    <span className="time">8h</span>
                  </div>
                  <div className="auto-right">
                    <button className="contract-arr"></button>
                  </div>
                </div>
                <div className="plan-time-form">
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">근무시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">휴계시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-item-bx part">
                <div className="plan-staff-head">
                  <div className="plan-staff-info">
                    <span className="badge green">파트</span>
                    <span className="name">김직원 </span>
                    <span className="time">8h</span>
                  </div>
                  <div className="auto-right">
                    <button className="contract-arr"></button>
                  </div>
                </div>
                <div className="plan-time-form">
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">근무시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">휴계시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-item-bx temporary">
                <div className="plan-staff-head">
                  <div className="plan-staff-info">
                    <span className="badge brown">임시</span>
                    <span className="name">김직원 </span>
                    <span className="time">8h</span>
                  </div>
                  <div className="auto-right">
                    <button className="contract-arr"></button>
                  </div>
                </div>
                <div className="plan-time-form">
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">근무시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="plan-time-form-item">
                    <div className="plan-time-form-item-tit">휴계시간</div>
                    <div className="flex g8">
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          시작시간
                        </button>
                      </div>
                      <div className="block">
                        <button
                          className="select-form al-l"
                          onClick={() => setTimeSelectSheet(true)}
                        >
                          종료시간
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
