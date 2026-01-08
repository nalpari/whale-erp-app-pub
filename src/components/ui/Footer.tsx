"use client";

import { useMenuStore } from "@/store/useMenuStore";
import { usePopupControler } from "@/store/usePopupControler";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // URL 세그먼트가 2개 이상인 경우 (예: /storeinfo/detail)
  const isSubPage = segments.length >= 2;
  const router = useRouter();
  const popupControler = usePopupControler();
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const closeMenu = useMenuStore((state) => state.closeMenu);

  const handleHomeClick = () => {
    closeMenu();
    router.push("/");
  };
  if (isSubPage) {
    return null;
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <button
          className={`footer-item${popupControler.aiChatPopup ? " act" : ""}`}
          onClick={() => popupControler.setAiChatPopup(true)}
        >
          <div className="item-icon ai"></div>
          <div className="item-text">AI</div>
        </button>
        <button
          className={`footer-item ${
            popupControler.aiChatPopup || isMenuOpen ? " " : "act"
          }`}
          onClick={handleHomeClick}
        >
          <div className="item-icon home"></div>
          <div className="item-text">홈</div>
        </button>
        <button
          className={`footer-item${isMenuOpen ? " act" : ""}`}
          onClick={toggleMenu}
        >
          <div className="item-icon menu"></div>
          <div className="item-text">전체메뉴</div>
        </button>
      </div>
    </footer>
  );
}
