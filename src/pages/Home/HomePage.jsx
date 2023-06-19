import React from "react";
import styles from "./HomePage.module.scss";
import "./slider.css";
import Robo1 from "@/assets/Robo1.png";
import Robo from "@/assets/Robo.png";
import { Header } from "@/components";
import { ManipulatorCard } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const roboArray = [
  {
    id: 1,
    src: Robo1,
    title: "Манипулятор 1",
    subtitle: `Используется для создания модульной 
      автоматизированной системы, способной к непрерывному 
      выполнению широкого спектра автоматизируемых химических задач`,
  },
  {
    id: 2,
    src: Robo,
    title: "Манипулятор 2",
    subtitle: `Используется для создания модульной 
      автоматизированной системы, способной к непрерывному 
      выполнению широкого спектра автоматизируемых химических задач`,
  },
  {
    id: 3,
    src: Robo1,
    title: "Манипулятор 3",
    subtitle: `Используется для создания модульной 
      автоматизированной системы, способной к непрерывному 
      выполнению широкого спектра автоматизируемых химических задач`,
  },
  {
    id: 4,
    src: Robo,
    title: "Манипулятор 4",
    subtitle: `Используется для создания модульной 
      автоматизированной системы, способной к непрерывному 
      выполнению широкого спектра автоматизируемых химических задач`,
  },
  {
    id: 5,
    src: Robo,
    title: "Манипулятор 5",
    subtitle: `Используется для создания модульной 
      автоматизированной системы, способной к непрерывному 
      выполнению широкого спектра автоматизируемых химических задач`,
  },
];

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Swiper
          effect={"coverflow"}
          slidesPerView={2}
          centeredSlides={true}
          speed={1000}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
        >
          {roboArray.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <ManipulatorCard isActive={isActive} {...item} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
};
