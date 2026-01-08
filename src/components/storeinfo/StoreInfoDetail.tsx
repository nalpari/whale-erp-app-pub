"use client";

export default function StoreInfoDetail() {
  return (
    <div className="container sub">
      <div className="sub-tit-wrap">
        <div className="sub-tit">
          <span className="sub-tit-code">BBT2025040101</span>
          <span>힘이나는커피생활 을지로3가점</span>
        </div>
      </div>
      <div className="sub-content-body">
        <div className="sub-cont-wrap">
          <div className="sub-cont-item-wrap">
            <div className="sub-cont-tit-wrap">
              <div className="sub-cont-tit">점포 정보</div>
              <div className="sub-cont-btn-wrap">
                <button className="sub-edit-btn"></button>
              </div>
            </div>
            <div className="sub-item-bx">
              <table className="info-table">
                <colgroup>
                  <col style={{ width: "75px" }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>본사</th>
                    <td>주식회사 따름인</td>
                  </tr>
                  <tr>
                    <th>가맹점</th>
                    <td>힘이나는커피생활 을지로3가점</td>
                  </tr>
                  <tr>
                    <th>운영여부</th>
                    <td>
                      <div className="flex g8">
                        <span className="badge blue">운영</span>
                        <span className="sub-txt">변경일 : 2025.12.28</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sub-item-bx">
              <table className="info-table">
                <colgroup>
                  <col style={{ width: "113px" }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>대표자</th>
                    <td>홍길동</td>
                  </tr>
                  <tr>
                    <th>사업자등록번호</th>
                    <td>123-88-12345</td>
                  </tr>
                  <tr>
                    <th>점포주소</th>
                    <td>서울시 중구 삼봉로 98 삼봉 아파트 1층 2호</td>
                  </tr>
                  <tr>
                    <th>대표자 연락처</th>
                    <td>02-333-9999</td>
                  </tr>
                  <tr>
                    <th>점포 전화번호</th>
                    <td>02-333-9999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="sub-cont-wrap">
          <div className="sub-cont-item-wrap">
            <div className="sub-cont-tit-wrap">
              <div className="sub-cont-tit">점포 사진</div>
              <div className="sub-cont-btn-wrap">
                <button className="sub-edit-btn"></button>
              </div>
            </div>
            <div className="sub-item-bx">
              <div className="store-img-list">
                <div className="store-img-item">
                  <div className="store-img-tit">
                    <span className="img-tit">점포 사진 1점포 사진 사진</span>
                    <span>.jpg</span>
                  </div>
                  <div className="store-img-btn-wrap">
                    <button className="img-delete"></button>
                    <button className="img-show"></button>
                  </div>
                </div>
                <div className="store-img-item">
                  <div className="store-img-tit">
                    <span className="img-tit">
                      점포 사진 1점포 사진 사진점포 사진 1점포 사진 사진점포
                      사진 1점포 사진 사진
                    </span>
                    <span>.png</span>
                  </div>
                  <div className="store-img-btn-wrap">
                    <button className="img-delete"></button>
                    <button className="img-show"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-cont-wrap">
          <div className="sub-cont-item-wrap">
            <div className="sub-cont-tit-wrap">
              <div className="sub-cont-tit">영업시간</div>
              <div className="sub-cont-btn-wrap">
                <button className="sub-edit-btn"></button>
              </div>
            </div>
            <div className="sub-item-bx">
              <table className="info-table">
                <colgroup>
                  <col style={{ width: "75px" }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>평일</th>
                    <td>
                      <div>월,화,수,목</div>
                      <div>07:00 ~ 22:00</div>
                      <div>15:00 ~ 17:00  브레이크타임</div>
                    </td>
                  </tr>
                  <tr>
                    <th>토요일</th>
                    <td>
                      <div>07:00 ~ 22:00</div>
                      <div>15:00 ~ 17:00 브레이크타임</div>
                    </td>
                  </tr>
                  <tr>
                    <th>일요일</th>
                    <td>07:00 ~ 22:00</td>
                  </tr>
                  <tr>
                    <th>정기휴일</th>
                    <td>금요일</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
