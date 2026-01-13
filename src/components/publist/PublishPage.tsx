import Link from "next/link";
import "@/styles/publishpage.scss";

export default function PublishPage() {
  return (
    <div className="publish-list">
      <div className="p-header">
        <h1>Whale ERP</h1>
      </div>
      <div className="p-body">
        <div className="p-contents">
          <div className="p-guide mb15">
            <div className="p-guide-header">Style Guide</div>
            <div className="p-guide-content">
              <div className="p-guide-link-wrap">
                <Link href={"/list/style"}>Style Guide</Link>
              </div>
            </div>
          </div>
          <div className="p-guide">
            <div className="p-guide-header">Publish Guide</div>
            <div className="p-guide-content">
              <p>
                ※ className은 케밥 케이스 사용
                <span> ex) &quot;sample-class&quot;</span>
              </p>
              <p>
                ※ img네이밍은 &quot;_&quot;로 사용, 번호 사용시 01, 02 와 같이
                2자리 숫자 사용 <span>ex) &quot;img_sample01&quot;</span>
              </p>
              <p>
                ※ button, select, checkbox, radio... 등 기본 설정은
                <span> Style Guide</span>에 정의된 내용만 사용
              </p>
              <p>
                ※ scss파일 생성시 &quot;_&quot;를 앞에 붙힌 후 생성, 또한 해당
                카테고리에 적합한 폴더에 생성
              </p>
            </div>
          </div>
          <div className="p-list-wrap">
            <h2>Publish List</h2>
            <div className="p-list-table">
              <table>
                <colgroup>
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "15%" }} />
                  <col />
                  <col style={{ width: "13%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "13%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Depth01</th>
                    <th>Depth02</th>
                    <th>파일명</th>
                    <th>비고</th>
                    <th>MarkUp</th>
                    <th>완료일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Main</td>
                    <td></td>
                    <td>
                      <Link href={"/"}>Main.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td rowSpan={6}>점포 정보</td>
                    <td>점포 정보 리스트</td>
                    <td>
                      <Link href={"/storeinfo"}>StoreInfoList.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포 정보 상세</td>
                    <td>
                      <Link href={"/storeinfo/1"}>StoreInfoDetail.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포 정보 등록</td>
                    <td>
                      <Link href={"/storeinfo/create"}>
                        StoreInfoCreate.tsx
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포 정보 수정</td>
                    <td>
                      <Link href={"/storeinfo/1/edit/store"}>
                        StoreEditInfo.tsx
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포 사진 수정</td>
                    <td>
                      <Link href={"/storeinfo/1/edit/photo"}>
                        StoreEditPhoto.tsx
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포 영업시간 수정</td>
                    <td>
                      <Link href={"/storeinfo/1/edit/time"}>
                        StoreEditTime.tsx
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td rowSpan={6}>직원 정보</td>
                    <td>직원 정보 리스트</td>
                    <td>
                      <Link href={"/staff"}>StaffInfoList.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-01-13</td>
                  </tr>
                  <tr>
                    <td>직원 정보 상세</td>
                    <td>
                      <Link href={"/staff/1"}>StaffInfoDetail.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-01-13</td>
                  </tr>
                  <tr>
                    <td>직원 정보 수정</td>
                    <td>
                      <Link href={"/staff/1/edit"}>StaffInfoEdit.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-01-13</td>
                  </tr>
                  <tr>
                    <td>직원 초대</td>
                    <td>
                      <Link href={"/staff/invite"}>StaffInvite.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-01-13</td>
                  </tr>
                  <tr>
                    <td>직원 근로계약서</td>
                    <td>
                      <Link href={"/staff/employment"}>
                        StaffEmployment.tsx
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-01-13</td>
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
