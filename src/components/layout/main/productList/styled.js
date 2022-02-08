import styled from "styled-components";
import { Swiper } from "swiper/react";

const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;



export {ProductSwiper};