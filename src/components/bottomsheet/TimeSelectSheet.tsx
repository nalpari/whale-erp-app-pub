"use client";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import { Sheet } from "react-modal-sheet";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function TimeSelectSheet() {
  const timeSelectSheet = useBottomSheetControler(
    (state) => state.timeSelectSheet
  );
  const setTimeSelectSheet = useBottomSheetControler(
    (state) => state.setTimeSelectSheet
  );

  const handleClose = () => {
    setTimeSelectSheet(false);
  };

  return (
    <Sheet
      isOpen={timeSelectSheet}
      onClose={handleClose}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content disableDrag={true}>
          <div className="bottom-sheet time">
            <div className="bottom-sheet-header">
              <h3>시간설정</h3>
            </div>
            <div className=" bottom-sheet-body">
              <div className="time-select-wrap">
                <div className="start-end-time-wrap">
                  <Swiper
                    direction={"vertical"}
                    className="mySwiper"
                    centeredSlides={true}
                  >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={handleClose} />
    </Sheet>
  );
}
