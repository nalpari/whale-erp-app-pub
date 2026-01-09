"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useMenuStore } from "@/store/useMenuStore";
import { useRouter } from "next/navigation";

export default function RnbMenu() {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const closeMenu = useMenuStore((state) => state.closeMenu);
  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    return () => {
      document.body.classList.remove("open");
    };
  }, [isMenuOpen]);

  const handleStoreInfoClick = (link: string) => {
    closeMenu();
    router.push(link);
  };

  return (
    <div className={`rnb-menu${isMenuOpen ? " act" : ""}`}>
      <div className="rnb-header-wrap">
        <div className="profile-wrap flex g12">
          <div className="profile-img">
            <Image
              src="/assets/images/layout/avatar01.svg"
              alt="profile-img"
              width={46}
              height={46}
            />
          </div>
          <div className="profile-info">
            <p>
              <span>김지영(himmoo)</span>님
            </p>
            <p>환영 합니다.</p>
          </div>
        </div>
        <div className="flex g8">
          <button className="btn-form block blue">내 정보 수정</button>
          <button className="btn-form block sky">비밀번호 변경</button>
        </div>
      </div>
      <div className="rnb-menu-wrap">
        <dl className="rnb-menu-list">
          <dt className="rnb-menu-tit">점포관리</dt>
          <dd className="rnb-menu-item">
            <Link
              href="/storeinfo"
              className="rnb-menu-link"
              onClick={() => handleStoreInfoClick("/storeinfo")}
            >
              점포정보 관리
            </Link>
          </dd>
        </dl>
        <dl className="rnb-menu-list">
          <dt className="rnb-menu-tit">직원관리</dt>
          <dd className="rnb-menu-item">
            <Link href="/staff" className="rnb-menu-link">
              직원정보 관리
            </Link>
          </dd>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              근로계약관리
            </Link>
          </dd>
        </dl>
        <dl className="rnb-menu-list">
          <dt className="rnb-menu-tit">직원관리</dt>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              직원정보 관리
            </Link>
          </dd>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              근로계약관리
            </Link>
          </dd>
        </dl>
        <dl className="rnb-menu-list">
          <dt className="rnb-menu-tit">급여 명세서</dt>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              정직원 급여 명세서
            </Link>
          </dd>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              파트타이머 급여 명세서
            </Link>
          </dd>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              연장근무 수당 명세서
            </Link>
          </dd>
        </dl>
        <dl className="rnb-menu-list">
          <dt className="rnb-menu-tit">근무현황</dt>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              출퇴근현황
            </Link>
          </dd>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              매장별 근무 계획표
            </Link>
          </dd>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              매장별 근무 계획 수립
            </Link>
          </dd>
        </dl>
        <dl className="rnb-menu-list">
          <dt className="rnb-menu-tit">기타</dt>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              알림설정
            </Link>
          </dd>
          <dd className="rnb-menu-item">
            <Link href="/" className="rnb-menu-link">
              로그아웃
            </Link>
          </dd>
        </dl>
      </div>
    </div>
  );
}
