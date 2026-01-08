"use client";

import { usePathname } from "next/navigation";
import StoreSelect from "./StoreSelect";

export default function Header() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // URL 세그먼트가 2개 이상인 경우 (예: /storeinfo/detail)
  const isSubPage = segments.length >= 2;

  if (isSubPage) {
    return (
      <header className="header sub">
        <div className="header-container">
          <div className="header-inner">
            <button className="btn-back">뒤로가기</button>
            <h1>서브 페이지 헤더</h1>
          </div>
        </div>
      </header>
    );
  }

  // 기본 Header (메인, 1depth)
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <StoreSelect />
        </div>
      </div>
    </header>
  );
}
