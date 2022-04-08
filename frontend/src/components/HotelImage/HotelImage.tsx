import { useEffect, useState } from 'react';

import {
  ImgageWrapper,
  BigBox,
  SmallBox,
  Image,
  ImageBtn,
  ImageModal,
  ImgTitle,
  SliderWrapper,
  ImageModalTitle,
} from './HotelImage.style';
import ButtonVer2 from '../Carousels/Button/ButtonVer2';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const HotelImage = ({ photos }) => {
  const [initialslider, setInitialslider] = useState<number>(0);
  const [modalFlag, setModalFlag] = useState(false);

  const HotelImageModal = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: initialslider,
      lazyLoad: true,
      nextArrow: <ButtonVer2 role={'next'} onClick={() => {}} />,
      prevArrow: <ButtonVer2 role={'prev'} onClick={() => {}} />,
    };

    return (
      <ImageModal>
        <ImageModalTitle>
          <button
            onClick={() => {
              setModalFlag(false);
            }}
          >
            <FontAwesomeIcon icon={faX} style={{ color: '#FFF' }} size="2x" />
          </button>
        </ImageModalTitle>
        <SliderWrapper>
          <div>
            <Slider {...settings}>
              {photos.map((photo, index) => (
                <div key={index.toString()}>
                  <Image src={photo} alt={'호텔 기본 이미지' + index + 1}></Image>
                  <div>{index + 1 + '/' + photos.length}</div>
                </div>
              ))}
            </Slider>
          </div>
        </SliderWrapper>
        <ImgTitle>기본 이미지</ImgTitle>
      </ImageModal>
    );
  };

  return (
    <>
      <ImgageWrapper>
        <BigBox>
          <div>
            <figure>
              <div>
                <Image src={photos[0]} alt={'호텔 대표이미지1'} />
              </div>
              <ImageBtn
                type="button"
                aria-label="Hotel representative"
                onClick={() => {
                  setModalFlag(true);
                }}
              ></ImageBtn>
            </figure>
          </div>
        </BigBox>
        <SmallBox>
          {photos.slice(1, 5).map((url, index) => (
            <div key={index.toString()}>
              <figure>
                <div>
                  <Image src={url} alt={'호텔 대표이미지' + index + 1}></Image>
                </div>
                <ImageBtn
                  onClick={() => {
                    setModalFlag(true);
                    setInitialslider(index + 1);
                  }}
                ></ImageBtn>
              </figure>
            </div>
          ))}
        </SmallBox>
      </ImgageWrapper>
      {modalFlag ? HotelImageModal() : ''}
    </>
  );
};

export default HotelImage;
