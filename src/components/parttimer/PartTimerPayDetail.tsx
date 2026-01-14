export default function PartTimerPayDetail() {
  return (
    <div className="container sub">
      <div className="pay-head-btn-wrap">
        <button className="pay-head-btn">
          <i className="email-icon"></i>이메일 전송
        </button>
        <button className="pay-head-btn">
          <i className="download-icon"></i>급여명세서 다운로드
        </button>
      </div>
      <div className="sub-content-body">
        <button className="work-time-edit ">
          <div className="work-time-edit-tit">
            <i className="time-edit-icon"></i>
            <span>근무시간 수정</span>
          </div>
          <div className="auto-right">
            <i className="contract-arr"></i>
          </div>
        </button>
        <div className="sub-cont-wrap">
          <div className="sub-cont-item-wrap">
            <div className="sub-item-bx">
              <div className="data-filed">
                <div className="filed-tit">
                  소속 <span className="imp">*</span>
                </div>
                <div className="flex g8">
                  <button className="radio-btn block act">본사</button>
                  <button className="radio-btn block">가맹점</button>
                </div>
              </div>
            </div>
            <div className="sub-item-bx">
              <div className="data-filed">
                <div className="filed-tit">
                  본사/가맹점/점포 <span className="imp">*</span>
                </div>
                <div className="block mb8">
                  <select name="" id="" className="select-form">
                    <option value="1"> 본사 선택</option>
                  </select>
                </div>
                <div className="block mb8">
                  <select name="" id="" className="select-form" disabled>
                    <option value="1"> 가맹점 선택</option>
                  </select>
                </div>
                <div className="block">
                  <select name="" id="" className="select-form">
                    <option value="1"> 점포선택</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="sub-item-bx">
              <div className="data-filed">
                <div className="filed-tit">
                  직원명 <span className="imp">*</span>
                </div>
                <div className="block">
                  <select name="" id="" className="select-form" disabled>
                    <option value="1"> 홍길동</option>
                  </select>
                </div>
                <div className="s-txt mt10">BIM1001</div>
              </div>
            </div>
            <div className="sub-item-bx">
              <div className="data-filed">
                <div className="filed-tit">
                  급여 지급월 <span className="imp">*</span>
                </div>
                <div className="block mb8">
                  <select name="" id="" className="select-form">
                    <option value="1"> 2025.05</option>
                  </select>
                </div>
                <div className="block">
                  <input
                    type="text"
                    className="input-frame"
                    defaultValue="지급일 - 2025.06.10"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="sub-item-bx">
              <div className="data-filed">
                <div className="filed-tit">
                  근무기간 <span className="imp">*</span>
                </div>
                <div className="flex g6 mb8">
                  <div className="date-picker-custom">
                    <input
                      type="text"
                      className="date-picker-input"
                      defaultValue="2025.10.28"
                    />
                  </div>
                  <span>~</span>
                  <div className="date-picker-custom">
                    <input
                      type="text"
                      className="date-picker-input"
                      defaultValue="2025.10.28"
                    />
                  </div>
                </div>
                <div className="block">
                  <button className="btn-form block grey">검색</button>
                </div>
              </div>
            </div>
            <div className="sub-item-bx">
              <dl className="pay-data-guide">
                <dt>4대보험 공제</dt>
                <dd>
                  <div className="guide-filed-tit">국민연금(원)</div>
                  <div className="block">
                    <input type="text" className="input-frame al-r" />
                  </div>
                </dd>
                <dd>
                  <div className="guide-filed-tit">건강보험(원)</div>
                  <div className="block">
                    <input type="text" className="input-frame al-r" />
                  </div>
                </dd>
                <dd>
                  <div className="guide-filed-tit">고용보험(원)</div>
                  <div className="block">
                    <input type="text" className="input-frame al-r" />
                  </div>
                </dd>
                <dd>
                  <div className="guide-filed-tit">장기요양보험(원)</div>
                  <div className="block">
                    <input type="text" className="input-frame al-r" />
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="block">
          <button className="btn-form block blue">저장하기</button>
        </div>
      </div>
    </div>
  );
}
